<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { Bookmark as BookmarkType } from "./architecture";
	import Bookmark from "./Bookmark.svelte";

	export let mode: 'adding' | 'editing'

	export let name: string = ""
	export let url: string = ""
	export let tags: string[] = []

	let tagInput = ""

	$: if (tagInput.at(-1) === " ") {
		const tag = tagInput.trimEnd()
		tag && tags.push(tag)
		prugeTags()
		tagInput = ''
	}

	const dispatch = createEventDispatcher<{ submit: BookmarkType, delete: BookmarkType }>()

	function removeTag(tag: string) {
		tags = tags.filter(t => t !== tag)
	}

	function prugeTags() {
		tags = [...new Set(tags)]
	}
</script>

<div class="card w-96 bg-base-100 shadow-xl text-neutral-content">
	<div class="card-body">
		{#if name || url}
			<Bookmark bind:url bind:name bind:tags />
		{/if}
		
		<div class="form-control w-full max-w-xs">
			<label class="label" for=name>
				<span class="label-text"> Name </span>
			</label>
			<input id=name bind:value={name} type="text" placeholder="Example" class="input input-bordered w-full max-w-xs" />

			<label class="label mt-4" for=url>
				<span class="label-text"> URL </span>
			</label>
			<input id=url bind:value={url} type="text" placeholder="https://example.com" class="input input-bordered w-full max-w-xs" />


			<label class="label mt-4" for='tags'>
				<span class="label-text"> Tags </span>
			</label> 
			<input id=tags bind:value={tagInput} type="text" placeholder="productivity, media..." class="input input-bordered w-full max-w-xs" />
		</div>

		<div class='flex flex-wrap gap-2'>
			{#each tags as tag}
				<button class='badge badge-secondary' on:click={() =>  removeTag(tag)}> #{tag} </button>
			{/each}
		</div>
		
		{#if tags.length}
			<span class="label-text"> Click on a tag to delete it </span>
		{/if}

		<div class="card-actions justify-end">
			{#if mode === 'adding'}
				<button class="btn btn-info" on:click={() => dispatch("submit", undefined)}> Cancel </button>
			{/if}

			{#if mode === 'editing'}
				<button class="btn btn-error" on:click={() => dispatch("delete", { name, url, tags })}> Delete </button>
			{/if}

			<button class="btn btn-success" disabled={!name || !url} on:click={() => dispatch("submit", { name, url, tags })}> Done </button>
		</div>
	</div>
</div>
