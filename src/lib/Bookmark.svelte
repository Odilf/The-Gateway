<script lang='ts' context='module'>
	export interface BookmarkType {
		name: string,
		url: string,
		tags: string[],
	}
</script>

<script lang="ts">
	export let name: string
	export let url: string
	export let tags: string[] = []
</script>

<a class="btn h-fit py-2 gap-2 m-2 btn-primary normal-case" href={url} target="_blank">
	{#if url}
		<img class='h-12 w-12 drop-shadow-sm rounded' src='https://icon.horse/icon?uri={url}&size=small' alt={name}/>
	{/if}
	<h2 class="text-xl"> {name} </h2>

	<div class='flex flex-wrap gap-2'>
		{#each tags as tag}
			<span class='badge badge-secondary'> #{tag} </span>
		{/each}
	</div>
</a>