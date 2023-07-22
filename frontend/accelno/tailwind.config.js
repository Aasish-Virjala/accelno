/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				grotesk: ['Grotesk', 'sans-serif'],
				spaceGrotesk: ['Space Grotesk', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				lightGrey: '#D9D9D9',
				darkGrey: '#101010',
				primaryGrey: '#393A3E',
				secondaryGrey: '#2D2F35',
				dashboardGrey: '#1F2023',
				searchbarGrey: '#555B5F',
				primaryBlue: '#001BA6',
				secondaryBlue: '#0030AA',
				dashboardBlue: '#2151C0',
				secondaryPurple: '#381EDA',
				darkNavy: '#0A1628',
				primaryGold: '#B8961C',
				lightSilver: '#CBD2E3',
				secondarySilver: '#8C9296',
				primaryGreen: '#83BDA7',
				darkPink: '#D9949D',
			},
			borderColor: {
				primaryPurple: '#7B81FF',
				lightSilver: '#CBD2E3',
			},
		},
	},
	plugins: [],
};
