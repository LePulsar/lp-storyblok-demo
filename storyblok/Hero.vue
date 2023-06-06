<template>

	<div class="h-screen w-screen bg-red flex items-center justify-center relative p-24" v-editable="blok">
        
		<h1 class="text-7xl font-bold text-white relative z-10 text-center shadow-xl">{{  blok.title }}</h1>

		<div class="absolute top-0 left-0 w-screen h-screen bg-slate-800 z-0">

			<NuxtImg
				width="1920"
				height="800"
				class="object-cover w-full h-full opacity-30"
				provider="storyblok"
				format="webp"
				loading="lazy"
				:src="blok.image.filename"
				/>

		</div>

    </div>
		
</template>

<script setup>
defineProps({ blok: Object })
</script>