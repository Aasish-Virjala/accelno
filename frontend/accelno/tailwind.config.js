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
				primaryBlue: '#001BA6',
				secondaryBlue: '#0030AA',
				secondaryPurple: '#381EDA',
				lightGrey: '#D9D9D9',
				darkNavy: '#0A1628',
			},
			borderColor: {
				primaryPurple: '#7B81FF',
			},
		},
	},
	plugins: [],
};
