<script lang="ts">
	import '@unocss/reset/tailwind.css'
	import '@kidonng/daisyui/index.css'
	import 'uno.css'
</script>

<main class="inset-0 flex flex-col justify-center items-center">
	<slot/>
</main>

<style global lang='postcss'>
	body {
		@apply bg-neutral;
	}
</style>