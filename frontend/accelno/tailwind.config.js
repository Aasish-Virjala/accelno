/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				grotesk: ['Grotesk', 'sans-serif'],
				spaceGrotesk: ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				darkGrey: '#101010',
			},
		},
	},
	plugins: [],
};
