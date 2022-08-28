<script lang='ts'>
	import  type { BookmarkType } from "$lib/Bookmark.svelte";
	import List from "$lib/List.svelte";
	import EditPopup from "$lib/Popup.svelte";
	import { bookmarks, settings, tags, tagSettings } from "$lib/db";

	let adding = false

	function addBookmark(bookmark: BookmarkType | undefined) {
		if (bookmark) {
			$bookmarks = [...$bookmarks, bookmark]			
		}

		adding = false
	}

	let groupedBookmarks: { tag: string, bookmarks: BookmarkType[] }[] = []
	$: if ($settings.groupByTag) {
		groupedBookmarks = $tags
		.map(tag => {
			return {
				tag, 
				bookmarks: $bookmarks.filter(b => b.tags.includes(tag))
			}})
		.filter(({tag}) => !$tagSettings[tag]?.hide)
	}
</script>

{#if $settings.groupByTag}
	<div class='flex gap-4 h-screen flex-wrap'>
		{#each groupedBookmarks as { tag, bookmarks: groupBookmarks }}
			<div class='flex flex-col items-center'>
				<h2 class='text-xl text-neutral-content'> #{tag} </h2>
				<List bookmarks={groupBookmarks} hideTags on:delete={e => $bookmarks = $bookmarks.filter(b => b.name !== e.detail.name)}/>
			</div>
		{/each}
	</div>
{:else}
	<List bind:bookmarks={$bookmarks} on:delete={e => $bookmarks = $bookmarks.filter(b => b !== e.detail)}/>
{/if}

<button class='btn btn-secondary btn-circle mt-4' on:click={() => adding = true}>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>	
</button>

<EditPopup bind:active={adding} on:submit={e => addBookmark(e.detail)} mode='adding'/>