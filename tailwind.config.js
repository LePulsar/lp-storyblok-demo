module.exports = {
	content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue', 'node_modules/flowbite.{js,ts}', 'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'],
	plugins: [
		require('flowbite/plugin')
	  ],
	theme: {
		extend: {
		  fontFamily: {
			'sans': ['Lato', 'sans-serif'],
			'serif': ['Playfair Display', 'serif']
		  },
		}
	  }
  }