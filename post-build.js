import {readFileSync, writeFileSync} from 'fs';

const path = '.svelte-kit/output/server/app.js';
let file = readFileSync(path).toString();

file = `import fetch from 'node-fetch';\n${file}`;
console.log('serverless function modified');

writeFileSync(path, file);
console.log('serverless function saved');