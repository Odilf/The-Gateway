import { writable } from 'svelte-local-storage-store'
import { derived } from 'svelte/store'
import type { BookmarkType as Bookmark } from './Bookmark.svelte'

export const bookmarks = writable<Bookmark[]>('bookmarks', [])
export const settings = writable<any>('settings', {})

interface TagSettings {
	index?: number,
	hide?: boolean
}

export const tagSettings = writable<Record<string, TagSettings>>('tagSettings', {})

export const tags = derived([bookmarks, tagSettings], ([bookmarks, tagSettings]) => {
	let tags = [...new Set(bookmarks.flatMap(bookmark => bookmark.tags))]
	
	return tags.sort((a, b) => {
		const ia: number = tagSettings[a]?.index ?? Infinity
		const ib: number = tagSettings[b]?.index ?? Infinity

		return ib - ia
	})
})