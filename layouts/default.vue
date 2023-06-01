<template>
	<div>
		<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
			<Head>

				<template v-for="meta in head.meta" :key="meta.id">
				<Meta :id="meta.id" :property="meta.property" :content="meta.content" />
				</template>
			</Head>
			<Body>
				<MainHeader/>
				<slot />
			</Body>
		</Html>

	</div>	
</template>
<script setup>

const version = 'draft'
const { locale } = useI18n()

const story = await useAsyncStoryblok('site-configuration',
	{
	version: version,
	language: locale.value,
	}
)


const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})


</script>
<style lang="">
	
</style>