<script lang="ts">
	export let name: string
	export let url: string
	export let tags: string[] = []
</script>

<a class="btn gap-2 m-2" href={url} target="_blank">
	<img class='h-8 w-8' src='https://icon.horse/icon?uri={url}&size=small' alt={name}/>
	<h2 class="text-xl"> {name} </h2>

	{#each tags as tag}
		<span class='badge badge-primary'> #{tag} </span>
	{/each}
</a>