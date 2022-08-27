import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Unocss from 'unocss/vite'
import { presetUno, transformerDirectives } from 'unocss'

import presetDaisy from 'unocss-preset-daisy'


const config: UserConfig = {
	plugins: [
		sveltekit(),
		Unocss({
			transformers: [transformerDirectives()],
			presets: [
				presetUno(),
				presetDaisy(),
			],
		}),
	]
};

export default config;
