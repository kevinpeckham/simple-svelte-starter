const prettierPluginSvelte = require("prettier-plugin-svelte");

// @ts-check
/// <reference types="./src/prettier" />
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: [prettierPluginSvelte],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],

	arrowParens: "always",
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "strict",
	pluginSearchDirs: false,
	printWidth: 80,
	quoteProps: "consistent",
	semi: true,
	singleQuote: false,
	singleAttributePerLine: true,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,

	// prettier svelte plugin options
	// https://github.com/sveltejs/prettier-plugin-svelte
	svelteAllowShorthand: true,
	svelteStrictMode: true,
};
