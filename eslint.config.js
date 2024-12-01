import { ryoppippi } from '@ryoppippi/eslint-config';

export default ryoppippi({
	svelte: true,
	unocss: false,
	tailwindcss: true,
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});
