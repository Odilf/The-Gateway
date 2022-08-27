<script lang="ts">
	import EditBookmark from "./EditBookmark.svelte";
	import { fly } from 'svelte/transition'
	import { createEventDispatcher } from "svelte";
	import type { BookmarkType } from "./Bookmark.svelte";

	export let mode: 'adding' | 'editing'
	export let active = false

	export let name: string = ""
	export let url: string = ""
	export let tags: string[] = []

	const dispatch = createEventDispatcher<{ submit: BookmarkType }>()
	
</script>

{#if active}
	<div transition:fly={{ x: -50 }} class='fixed z-10 inset-0 flex justify-center items-center backdrop-blur' on:click|self={() => active=false}>
		<EditBookmark on:submit={e => {
			active = false
			dispatch('submit', e.detail)
			name = ''
			url = ''
			tags = []
		}}
		on:delete bind:name bind:url bind:tags {mode} />
	</div>
{/if}