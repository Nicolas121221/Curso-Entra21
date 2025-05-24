<script>
	import { onMount } from "svelte";

	let loading = $state(true);
    let data = []
    onMount(()=>{
        



    })
</script>

<main
	class="fixed bottom-0 left-0 right-0 top-0 -z-10 flex items-center justify-center bg-zinc-800 pt-12"
>
	{#if loading}
		<section class="flex flex-col items-center justify-center gap-4">
			<div
				class="flex size-10 animate-spin items-center justify-center rounded-full border border-l-0 border-r-0 border-t-0 border-b-blue-500"
			></div>
			<h3 class="text-2xl font-thin text-white">Carregando ...</h3>
		</section>
	{:else}
    <div>

    </div>
    {/if}
</main>
