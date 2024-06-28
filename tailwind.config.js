// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '350px',
				md: '658px',
				lg: '894px',
				xl: '1040px',
				'2xl': '1144px',
			},
		},
	},
	plugins: [],
}
