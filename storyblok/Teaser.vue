<template>
	<h1
	  v-editable="blok"
	  class="py-32 text-6xl font-bold text-center"
	>
	  {{ blok.headline }}
</h1>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>