<script setup>

let { slug } = useRoute().params
    
const { locale } = useI18n()

const url = slug && slug.length > 0 ? slug.join('/') : 'home'

const config = useRuntimeConfig()

let endpoint = url.replace(/\/$/, '')

if (locale.value !== 'fr') {
	endpoint = locale.value + '/' + endpoint
}


const story = await useAsyncStoryblok(endpoint,
	{
	version: config.public.storyblokVersion,
	}
)




if (!story.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'not found',
		fatal: true
	})
}

const seo = useSeo(story)





</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>