<script lang="ts">
	import '@unocss/reset/tailwind.css'
	import '@kidonng/daisyui/index.css'
	import 'uno.css'

	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import { settings } from '$lib/db';

	onMount(() => {
		themeChange(false)
	})
</script>

<header class="navbar flex-col justify-center text-neutral-content bg-base-100">
	<h1 class='text-3xl font-black mx-2 cursor-default mt-2'> The {$settings.projectName || ""} Gateway </h1>
	<navbar class="py-2 gap-2">
		<a class='link' href='/about'> About </a>
		<a class='link' href='/'> Home </a>
		<a class='link' href='/settings'> Settings </a>
	</navbar>
</header>

<main class="inset-0 flex flex-col flex-wrap justify-center items-center relative min-h-[85vh] max-w-3xl mx-auto max-w-screen py-4">
	<slot/>
</main>

<style global lang='postcss'>
	body {
		@apply bg-neutral inset-0;
	}
</style>