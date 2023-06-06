<template>

	<Disclosure as="nav" class="fixed w-full z-50 top-0" v-slot="{ open }">
		<div class="px-12 py-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
			<!-- Mobile menu button-->
			<DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
				<span class="sr-only">Open main menu</span>
				<Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
				<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
			</DisclosureButton>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
			<div class="flex flex-shrink-0 items-center">
				<NuxtLink :to="useGetHomeUrl()" class="flex items-center">
					<img src="~assets/img/le-pulsar-logo.svg" class="h-10" alt="Le Pulsar" />
				</NuxtLink>
			</div>
			<div class="hidden sm:ml-6 sm:flex items-center">
				<div class="flex space-x-14">
					<template v-for="item in mainMenu" :key="item._uid">

						<NuxtLink v-if="item.component === 'menu_item'" :to="useUrlFilter(item.link.cached_url)" :target="item.link.target" class="text-white text-lg" activeClass="!text-primary">{{ item.name }}</NuxtLink>		

						<Menu v-else as="div" class="relative">
							
							<div>
								<MenuButton class="inline-flex gap-x-1.5 items-center text-white text-lg">
								{{ item.button_title }}
								<ChevronDownIcon class="-mr-1 h-5 w-5" aria-hidden="true" />
								</MenuButton>
							</div>

							<transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
								<MenuItems class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div class="py-1">
										<MenuItem v-slot="{ close }" as="div" v-for="subitem in item.children" :key="subitem._uid">
											<NuxtLink :to="useUrlFilter(subitem.link.cached_url)" @click="close" :target="subitem.link.target" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ subitem.name }}</NuxtLink>
										</MenuItem>
									</div>
								</MenuItems>
							</transition>
							</Menu>

					</template>

				</div>
				<LangSwitcher class="ml-8"/>
			</div>
			</div>
			
		</div>
		</div>

		<DisclosurePanel class="sm:hidden">
		<div class="space-y-1 px-2 pb-3 pt-2">
			<DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
		</div>
		</DisclosurePanel>
  	</Disclosure>

</template>

<script setup>

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const mainMenu = useState('mainMenu')


</script>