import { writable } from 'svelte-local-storage-store'
import type { BookmarkType as Bookmark } from './Bookmark.svelte'

export const bookmarks = writable<Bookmark[]>('bookmarks', [])
export const settings = writable<any>('settings', {})
export const tags = writable<{ tag: string, index?: number }[]>("tags", [])