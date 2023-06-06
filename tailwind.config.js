module.exports = {
	content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],

	theme: {

		
		
		extend: {
		  fontFamily: {
			'sans': ['Lato', 'sans-serif'],
			'serif': ['Playfair Display', 'serif']
		  },
		  colors: {
			primary: 'rgb(var(--color-primary) / <alpha-value>)',
      		secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
			},
		  
		}
	  }
  }