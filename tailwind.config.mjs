/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			serif: ['"brick"', ...defaultTheme.fontFamily.serif],
			sans: ['"Inter"', ...defaultTheme.fontFamily.serif],
		},
		fontSize: {
			sm: ["1rem", "1.18em"], // 14px
			md: ["1.625rem", "1.18em"], // 26px
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			green: "#001711",
		},
		spacing: {
			0: "0",
			2: "0.125rem",
			20: "1.25rem",
			30: "1.875rem",
			40: "2.5rem",
			60: "3.75rem",
			80: "5rem",
			90: "5.625rem",
			150: "9.375rem",
			190: "11.875rem",
			260: "16.25rem",
			280: "17.5rem",
			px: "1px",
			em: "1em",
			rem: "1rem",
		},
		extend: {},
	},
	plugins: [],
};
