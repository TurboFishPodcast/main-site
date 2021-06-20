import {promisify} from 'util';
import * as fs from 'fs';
import bson from 'bson';
import metaParser from 'markdown-yaml-metadata-parser';


const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

console.log('build started\n');

(async () => {
	const path = 'static/posts';
	const files = await readdir('static/posts');
	const count = files.length;
	const data = [];

	let progress = 0;

	const process = async (file) => {
		const source = (await readFile(path + '/' + file)).toString();
		const {metadata} = metaParser(source);
		metadata.path = file;
		
		data.push(metadata);
		progress++;

		console.log(`file ${progress} of ${count} (${file})`);

		if (progress === count) {
			console.log('sorting list');
			data.sort((a, b) => {b.date - a.date});
			
			console.log('');
			console.log('writing to database');
			await writeFile('src/posts.json', JSON.stringify(data));
			console.log('database built');
		}
	};

	for (const file of files) process(file);
})();
