<script lang="ts">
	import { writable } from "svelte-local-storage-store";

	const projectName = writable<string>('project-name', "")
	const settings = writable<any>('settings', {})
</script>

<section class='text-neutral-content'>
	<div class="form-control w-full max-w-xs">
		<label class="label font-light" for='project-name'>
		  <span class="label-text"> Project name </span>
		</label>
		<input type="text" bind:value={$projectName} class="input input-lg font-black input-bordered w-full max-w-xs" />


		<label class="label cursor-pointer mt-4">
			<span class="label-text text-lg"> Group by tag </span> 
			<input type="checkbox" class="toggle" bind:checked={$settings.groupByTag} />
		</label>

		<label class="label cursor-pointer mt-4">
			<span class="label-text text-lg"> Open in new tab </span> 
			<input type="checkbox" class="toggle" bind:checked={$settings.openInNewTab} />
		</label>
		
	</div>
</section>