/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require(`tailwindcss/defaultTheme`);
const { orange } = require(`tailwindcss/colors`);

module.exports = {
	content: [`./src/pages/**/*.{js,ts,jsx,tsx}`, `./src/components/**/*.{js,ts,jsx,tsx}`],
	darkMode: `class`,
	theme: {
		extend: {
			fontFamily: {
				sans: [`Inter`, ...fontFamily.sans],
			},
			minHeight: {
				content: `var(--h-content-area)`,
			},
			colors: {
				orange,
			},
		},
	},
	plugins: [require(`@tailwindcss/line-clamp`)],
};
