<script lang='ts'>
	import Bookmark, { type BookmarkType } from "$lib/Bookmark.svelte";
	import EditBookmark from "$lib/EditBookmark.svelte";

	import { writable } from 'svelte-local-storage-store'
	import Layout from "./+layout.svelte";

	const bookmarks = writable<BookmarkType[]>('bookmarks', [])

	$bookmarks = [
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/' ,
			tags: ['media']
		},
		{
			name: 'Caca',
			url: 'https://www.youtube.com/' ,
			tags: ['media']
		},
	]
</script>

<!-- <Bookmark name='YouTube' url=https://www.youtube.com/ tags={['media']}/> -->

{#each $bookmarks as bookmark}
	<Bookmark {...bookmark} />
{/each}

<!-- <EditBookmark /> -->