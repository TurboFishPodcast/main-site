import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

import dbuild_db from './build.db.js';
await dbuild_db();

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
