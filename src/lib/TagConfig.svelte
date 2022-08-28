<script lang="ts">
	import Tag from "./Tag.svelte";

	export let tag: string
	export let config: {
		index?: number
		hide?: boolean
	} = { index: 0, hide: false }

	$: if (!config) {
		config = { index: 0, hide: false }
	}

	let show = !config?.hide
	$: config.hide = !show
</script>


<Tag {tag} />
<input type="number" placeholder="" class="input input-bordered text-xl font-bold w-24" bind:value={config.index}/>
<input type="checkbox" placeholder="" class="toggle w-24" bind:checked={show}/>