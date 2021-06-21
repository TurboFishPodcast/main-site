import {promisify} from 'util';
import * as fs from 'fs';
import metaParser from 'markdown-yaml-metadata-parser';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export default async (dev) => {
	console.log('building database');
	const chunks = await readdir('static/db'); // list of directories under "static/db"
	let count = 0;

	const join = (...args) =>	args.join('/');
	const read = async (chunk) => { // process a directory
		count++;
		console.log(`processing chunk ${count} of ${chunks.length} (${chunk})`);
		const files = await (await readdir(join('static/db', chunk))).filter(el => !el.startsWith('.')); // list of files under "static/db/{chunk}"
		let data = [];
		let progress = 0;

		const process = async (file) => { // process a file
			const source = (await readFile(join('static/db', chunk, file))).toString();
			const {metadata} = metaParser(source);
			metadata.path = file;
			metadata.slug = encodeURIComponent(metadata.slug ?? file.replace(/.md$/, ''));

			data.push(metadata);
			progress++;
			console.log(`reading file ${progress} of ${files.length} (${file})`);
			if (progress === files.length) {
				console.log('sorting list');
				data.sort((a, b) => new Date(b.date) - new Date(a.date));
				data = data.filter(el => !el.draft || dev);
	
				console.log(`writing to chunk "${chunk}"`);
				await writeFile(join('src/routes/db', chunk + '.json'), JSON.stringify(data));
			}
			if (progress === files.length && count === chunks.length) console.log('database build complete\n');
		};
		for (const file of files) await process(file);
	};
	for (const chunk of chunks) await read(chunk);
};