import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs'
		})
	}
};

export default config;

/* DB BUILD SCRIPT */
import {promisify} from 'util';
import * as fs from 'fs';
import bson from 'bson';
import metaParser from 'markdown-yaml-metadata-parser';


const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

console.log('build started\n');

(async () => {
	const path = 'src/database/posts';
	const files = await readdir(path);
	const count = files.length;
	const data = [];

	let progress = 0;

	const process = async (file) => {
		const source = (await readFile(path + '/' + file)).toString();
		const {metadata, content} = metaParser(source);
		metadata.path = file;
		metadata.content = content;
		metadata.slug = file.replace(/.md$/, '');
		
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