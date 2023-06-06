<template>
	<h1
	  v-editable="blok"
	  class="py-32 text-6xl font-bold text-center text-red-500"
	>
	  {{ blok.headline }}
</h1>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>