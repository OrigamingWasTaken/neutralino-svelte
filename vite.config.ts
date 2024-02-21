import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';
import {createHtmlPlugin} from 'vite-plugin-html';
import {readFileSync, existsSync} from 'node:fs';

function getUrl() {
	try {
		const {port} = JSON.parse(readFileSync('./.tmp/auth_info.json', 'utf-8'));
		return `http://localhost:${port}`;
	} catch {
		return '%PUBLIC_URL%';
	}
}

// https://vitejs.dev/config/
export default defineConfig({
	root: 'frontend',
	plugins: [
		svelte(),
		createHtmlPlugin({
			template: 'index.html',
			inject: {
				data: {
					url: getUrl(),
				},
			},
		}),
	],
	build: {
		outDir: path.resolve('./frontend/dist'),
		rollupOptions: {
			external: ['/__neutralino_globals.js'],
		},
	},
	resolve: {
		alias: {
			$lib: path.resolve('./frontend/src/lib'),
			'@': path.resolve('./frontend/src'),
			'@root': path.resolve('./'),
		},
	},
	server: {
		host: 'localhost',
	},
});
