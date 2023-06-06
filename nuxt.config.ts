// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	runtimeConfig: {
		public: {
		  baseUrl: process.env.NUXT_BASE_URL,
		  defaultLanguage: 'fr',
		  siteName: 'Le Pulsar',
		  storyblokVersion: process.env.NUX_STORYBLOK_VERSION
		}
	  },
	modules: [
		'@storyblok/nuxt', 
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
		'@nuxtjs/google-fonts',
		'@nuxt/image-edge'
	],
	vite: {
		optimizeDeps: { exclude: ["fsevents"] },
	},
	storyblok: {
		accessToken: process.env.NUXT_STORYBLOK_ACCESS_TOKEN
	},
	i18n: {
		baseUrl: process.env.NUXT_BASE_URL,
        strategy: 'prefix_except_default',
        locales: [{
			code: 'en',
			iso: 'en-US'
		  },
		  {
			code: 'es',
			iso: 'es-ES'
		  },
		  {
			code: 'fr',
			iso: 'fr-FR'
		  }],
        defaultLocale: 'fr'
    },
	googleFonts: {
		download: true,
  		base64: true,
		families: {
		  Lato: [400, 700],
		  'Playfair+Display': [700]
		}
	},
	image: {
		storyblok: {
		  baseURL: 'https://a.storyblok.com'
		}
	}
})
