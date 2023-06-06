<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>

const { locale } = useI18n()
const mainMenu = useState('mainMenu')

const config = useRuntimeConfig()

const loadConfiguration = async () => {


	let endpoint = 'configuration'

	if (locale.value !== 'fr') {
		endpoint = locale.value + '/' + endpoint
	}

	const story = await useAsyncStoryblok(endpoint,
		{
			version: config.public.storyblokVersion,
		}
	)

	mainMenu.value = story.value.content.main_menu

}

watch(locale, loadConfiguration)

loadConfiguration()

</script>