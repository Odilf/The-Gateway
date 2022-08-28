<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { Bookmark as BookmarkType } from "./architecture";
	import Bookmark from "./Bookmark.svelte";

	export let mode: 'adding' | 'editing'

	export let name: string = ""
	export let url: string = ""
	export let tags: string[] = []

	let tagInput = ""

	$: tags = pruneTags(tagInput.split(" "))

	const dispatch = createEventDispatcher<{ submit: BookmarkType, delete: BookmarkType }>()

	function pruneTags(tags: string[]) {
		return [...new Set(tags.filter(tag => tag !== ""))]
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
			<textarea id=tags bind:value={tagInput} type="text" placeholder="productivity, media..." class="textarea textarea-bordered w-full max-w-xs" />
		</div>

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
