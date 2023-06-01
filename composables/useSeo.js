export const useSeo = (story) => {
	
	const config = useRuntimeConfig()


	let head = {
		title: story.value.name,
		meta: [],
		link: []
	}

	let metas = {
		'description': '',
		'og_title': story.value.name,
		'og_description': '',
		'og_type': 'website',
		'og_image': '',
		'twitter_description': '',
		'twitter_image': '',
		'twitter_title': ''
	}

	
	if ( 'seo' in story.value.content ) {

		if (story.value.content.seo.title) {
			head.title = story.value.content.seo.title
			metas.og_title = story.value.content.seo.title
		}

		if (story.value.content.seo.description) {
			metas.description = story.value.content.seo.description
			metas.og_description = story.value.content.seo.description
			metas.twitter_description = story.value.content.seo.description
		}

		if (story.value.content.seo.og_description) {
			metas.og_description = story.value.content.seo.og_description
		}

		if (story.value.content.seo.og_image) {
			metas.og_image = story.value.content.seo.og_image
		}

	}


	for (const [key, value] of Object.entries(metas)) {
		if (value) {
			head.meta.push({name: key.replace('_', ':'), content: value})
		}
	}



	// Alternates HREF

	const { locales } = useI18n()

	const useAlternates = useState('alternates')

	const defaultLanguage = config.public.defaultLanguage

	if (story.value.alternates.length > 0) {

		let alternates = []

		story.value.alternates.forEach(alternate => {

			const prefix = alternate.full_slug.split('/')[0]

			let currentLanguage = locales.value.find(local => local.code === prefix)

			if (!currentLanguage) {
				currentLanguage = locales.value.find(local => local.code === defaultLanguage)
			}

			head.link.push({rel: 'alternate', hreflang: currentLanguage.iso, href: config.public.baseUrl + useUrlFilter(alternate.full_slug)})

			alternates.push({ lang: currentLanguage, url: alternate.full_slug })

		})

		useAlternates.value = alternates


	} else {
		useAlternates.value = []
	}


	useHead(head)

  }