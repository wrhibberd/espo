/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			serif: ['"brick"', ...defaultTheme.fontFamily.serif],
			sans: ['"Inter"', ...defaultTheme.fontFamily.serif],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			green: "#001711",
		},
		fontSize: {
			sm: ["0.6875rem", "1.18em"],
		},
		extend: {},
	},
	plugins: [],
};
