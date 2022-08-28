<script lang='ts' context='module'>
	import { settings } from "./db";

	export interface BookmarkType {
		name: string,
		url: string,
		tags: string[],
	}
</script>

<script lang="ts">
	import EditPopup from "./Popup.svelte";
	import Tag from "./Tag.svelte";

	export let name: string
	export let url: string
	export let tags: string[] = []

	export let hideTags = false

	let editing = false
</script>

<a class="btn h-fit py-2 gap-2 m-2 btn-primary normal-case w-full flex-col justify-space-around" href={url} target={$settings.openInNewTab ? "_blank" : ""}
on:contextmenu|preventDefault={() => editing = true}>
	{#if url}
		<img class='h-12 w-12 drop-shadow-sm rounded' src='https://icon.horse/icon?uri={url}&size=small' alt={name}/>
	{/if}
	<h2 class="text-xl font-light"> {name} </h2>

	{#if !hideTags}
		<div class='flex flex-wrap gap-2'>
			{#each tags as tag}
				<Tag {tag} />
			{/each}
		</div>
	{/if}
</a>

<EditPopup bind:active={editing} bind:name bind:url bind:tags mode='editing' on:delete/>