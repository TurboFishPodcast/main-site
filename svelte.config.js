import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			prerender: {
				enabled: true
			}
		})
	}
};

export default config;


/* ---------- DB BUILD SCRIPT ---------- */
import {promisify} from 'util';
import * as fs from 'fs';
import metaParser from 'markdown-yaml-metadata-parser';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

(async () => {
	console.log('building database');
	const chunks = await (await readdir('static/db')).filter(el => !el.startsWith('.')); // list of directories under "static/db"

	const join = function() {
		const args = Array.prototype.slice.call(arguments);
		return args.join('/');
	}
	
	const read = async (chunk) => { // process a directory
		const files = await (await readdir(join('static/db', chunk))).filter(el => !el.startsWith('.')); // list of files under "static/db/{chunk}"
		const count = files.length;
		let data = [];
	
		let progress = 0;
	
		const process = async (file) => { // process a file
			const source = (await readFile(join('static/db', chunk, file))).toString();
			const {metadata} = metaParser(source);
			metadata.path = file;
			metadata.slug = encodeURIComponent(metadata.slug ?? file.replace(/.md$/, ''));
			
			data.push(metadata);
			progress++;
	
			console.log(`file ${progress} of ${count} (${file})`);
	
			if (progress === count) {
				console.log('sorting list');
				data.sort((a, b) => new Date(b.date) - new Date(a.date));
				data = data.filter(el => !el.draft);
	
				console.log('writing to database');
				await writeFile(join('src/routes/db', chunk + '.json'), JSON.stringify(data));
				console.log('database build complete\n');
			}
		};
	
		for (const file of files) process(file);
	};

	for (const chunk of chunks) read(chunk);
})();