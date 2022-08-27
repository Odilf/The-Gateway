<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { Bookmark as BookmarkType } from "./architecture";
	import Bookmark from "./Bookmark.svelte";

	export let bookmark: BookmarkType | null = null

	let name: string = ""
	let url: string = ""
	let tags: string = ""

	$: if (bookmark == null) {
		bookmark = {
			url: "",
			name: "",
			tags: [],
		}
	}

	$: if (bookmark) {
		bookmark.name = name
		bookmark.url = url
	}

	$: if (bookmark) {
		if (tags.at(-1) === " ") {
			const tag = tags.trimEnd()
			tag && bookmark.tags.push(tag)
			prugeTags()
			tags = ''
		}
	}

	const dispatch = createEventDispatcher<{ submit: null }>()

	function removeTag(tag: string) {
		if (bookmark) {
			bookmark.tags = bookmark.tags.filter(t => t !== tag)
		}
	}

	function prugeTags() {
		if (bookmark) {
			bookmark.tags = [...new Set(bookmark.tags)]
		}
	}
</script>

<div class="card w-96 bg-base-100 shadow-xl text-neutral-content">
	<div class="card-body">
		{#if bookmark}
			<Bookmark bind:url={bookmark.url} bind:name={bookmark.name} bind:tags={bookmark.tags} />
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
			<input id=tags bind:value={tags} type="text" placeholder="productivity, media..." class="input input-bordered w-full max-w-xs" />
		</div>

		{#if bookmark && bookmark.tags.length}
		<div class='flex flex-wrap gap-2'>
			{#each bookmark.tags as tag}
				<button class='badge badge-secondary' on:click={() =>  removeTag(tag)}> #{tag} </button>
			{/each}
		</div>

		<span class="label-text"> Click on a tag to delete it </span>
		
		{/if}

		<div class="card-actions justify-end">
			<button class="btn btn-accent" disabled={!name || !url} on:click={() => dispatch("submit")}> Done </button>
		</div>
	</div>
</div>
