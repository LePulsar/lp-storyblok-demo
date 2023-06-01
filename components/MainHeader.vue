<template>

	<Navbar>
      <template #logo>
        <NuxtLink :to="useGetHomeUrl()" class="flex items-center">
			<img src="~assets/img/le-pulsar-logo.svg" class="h-8 mr-3" alt="Le Pulsar" />
		</NuxtLink>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
			
			<li v-for="item in mainMenu" :key="item._uid">

				<NuxtLink v-if="item.component === 'menu_item'" :to="useUrlFilter(item.link.cached_url)" :target="item.link.target" class="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" activeClass="text-white  bg-blue-700 md:text-blue-700 md:bg-transparent">{{ item.name }}</NuxtLink>		

				<dropdown v-else placement="bottom" transition="dropdown-grow"> 
					
					<template #trigger="{ toggle }">
						<Button @click="toggle" class="flex items-center justify-between w-full !p-0 bg-transparent hover:bg-transparent !text-gray-900 focus:!ring-0">
							{{ item.button_title }}
							<template #suffix>
							<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
							</template>
						</Button>
					</template>



					<list-group>
						<list-group-item v-for="subitem in item.children" :key="subitem._uid">
								<NuxtLink :to="useUrlFilter(subitem.link.cached_url)" :target="subitem.link.target" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ subitem.name }}</NuxtLink>
						</list-group-item>	
					</list-group>


				</dropdown>
			</li>
			<li>
				<LangSwitcher/>
			</li>
        </NavbarCollapse>
      </template>
    </Navbar>

<!-- <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <NuxtLink :to="useGetHomeUrl()" class="flex items-center">
        <img src="~assets/img/le-pulsar-logo.svg" class="h-8 mr-3" alt="Le Pulsar" />
    </NuxtLink>

    <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
		<li v-for="item in mainMenu" :key="item._uid">

			<NuxtLink v-if="item.component === 'menu_item'" :to="useUrlFilter(item.link.cached_url)" :target="item.link.target" class="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" activeClass="text-white  bg-blue-700 md:text-blue-700 md:bg-transparent">{{ item.name }}</NuxtLink>		

			<dropdown v-else :text="item.button_title"  placement="bottom"> 
				<template #trigger="{ toggle }">
					<Button @click="toggle" class="flex items-center justify-between w-full p-0">
						Top
						<template #suffix>
						<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
						</template>
					</Button>
				</template>
				<list-group>
					<list-group-item>Item #1</list-group-item>
					<list-group-item>Item #2</list-group-item>
					<list-group-item>Item #3</list-group-item>
				</list-group>
			</dropdown>
			<template v-else>
				<button :id="'dropdownBtn' + item._uid" :data-dropdown-toggle="'dropdown' +  + item._uid" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{{ item.button_title }} <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

            	<div :id="'dropdown' +  + item._uid" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
					<ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
						<li v-for="subitem in item.children" :key="subitem._uid">
							<NuxtLink :to="useUrlFilter(subitem.link.cached_url)" :target="subitem.link.target" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ subitem.name }}</NuxtLink>
						</li>					
					</ul>
        		</div>
			</template>	
		</li>
      </ul>
    </div>
	<LangSwitcher/>
  </div>
</nav> -->

	<!-- <div class="flex justify-between">

		<ul class="flex flex-row gap-5">

			<li v-for="item in mainMenu" :key="item.link.cached_url">
				<NuxtLink v-if="item.link.linktype === 'story'" :to="formatLink(item.link.cached_url)">{{ item.name }}</NuxtLink>
				<a v-else :href="item.link.cached_url" :target="item.link.target">{{ item.name }}</a>
			</li>

		</ul>

		
	</div> -->
</template>

<script setup>

import { Dropdown, ListGroup, ListGroupItem, Button, Navbar, NavbarCollapse } from 'flowbite-vue'


const { locale } = useI18n()
const mainMenu = useState('mainMenu')

const loadConfiguration = async () => {


	let endpoint = 'configuration'

	if (locale.value !== 'fr') {
		endpoint = locale.value + '/' + endpoint
	}

	const story = await useAsyncStoryblok(endpoint,
		{
			version: 'draft',
		}
	)

	mainMenu.value = story.value.content.main_menu

}

watch(locale, loadConfiguration)

loadConfiguration()

</script>