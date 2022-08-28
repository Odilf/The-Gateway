<script lang="ts">
	import { settings, tagSettings, tags } from "$lib/db";
	import TagConfig from "$lib/TagConfig.svelte";
	import { flip } from "svelte/animate";
</script>

<section class='text-neutral-content'>
	<div class="form-control w-full max-w-xs">
		<label class="label font-light" for='project-name'>
		  <span class="label-text"> Project name </span>
		</label>
		<input type="text" bind:value={$settings.projectName} class="input input-lg font-black input-bordered w-full max-w-xs" />


		<label class="label cursor-pointer mt-4">
			<span class="label-text text-lg">
				Group by tag
			</span> 
			<input type="checkbox" class="toggle" bind:checked={$settings.groupByTag} />
		</label>

		<label class="label cursor-pointer mt-4">
			<span class="label-text text-lg">
				Open in new tab
			</span> 
			<input type="checkbox" class="toggle" bind:checked={$settings.openInNewTab} />
		</label>
		
		
		<span class="label-text text-lg my-4">
			Tag order
		</span> 
		<div class='flex gap-2 flex-wrap'>
			{#each $tags as tag (tag)} 
			<div animate:flip={{ duration: 300 }} class='flex flex-col'>
				<TagConfig {tag} bind:config={$tagSettings[tag]}/>
			</div>
			{/each}
		</div>
		
	</div>
</section>