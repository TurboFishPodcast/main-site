import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

// import dbuild_db from './build.db.js';

// const dev = process.argv.slice(2)[0] === 'dev';
// await dbuild_db(dev);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// amp: true,
		adapter: adapter({
			pages: 'docs',
			prerender: {
				enabled: true
			}
		})
	}
};

export default config;
