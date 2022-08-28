<script lang='ts'>
	import  Bookmark, { type BookmarkType } from "./Bookmark.svelte";
	import { flip } from "svelte/animate";
	import { scale, fade } from "svelte/transition";
	

	export let bookmarks: BookmarkType[]
	export let hideTags = false

	
	
</script>

<ul class='flex flex-col gap-4 items-center flex-wrap justify-center'>
	{#each bookmarks as bookmark (bookmark.url)}
		<li animate:flip in:scale out:fade|local>
			<Bookmark {...bookmark} on:delete {hideTags}/>
		</li>
	{/each}
</ul>

