<script setup>

const { locale, locales } = useI18n()
const useAlternates = useState('alternates')

const config = useRuntimeConfig()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const switchLink = function (code) {

	let links = {}

	availableLocales.value.forEach(loc => {
		if (loc.code !== config.public.defaultLanguage) {
			links[loc.code] = '/' + loc.code + '/'
		} else {
			links[loc.code] = '/'
		}
	})

	if (useAlternates.value) {
		useAlternates.value.forEach(alternate => {
			links[alternate.lang.code] = '/' + alternate.url
		})
	}

	return useUrlFilter(links[code])

}

</script>

<template>

	<ul class="flex flex-row">

		<li v-for="locale in availableLocales" :key="locale" class="mx-4">
			<NuxtLink  :to="switchLink(locale.code)">{{ locale.code }}</NuxtLink>
		</li>

	</ul>

</template>