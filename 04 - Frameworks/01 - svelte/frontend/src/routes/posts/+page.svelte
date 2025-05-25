<script>
	import { onMount } from 'svelte';
	import Post from '$lib/components/Post.svelte';

	let loading = $state(true);
	let datas = $state([]);
	onMount(async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const json = await response.json();
		datas = json;
		setTimeout(() => {
			loading = false;
		}, 300);
	});
</script>

<main
	class="min-h-screen -z-10 flex items-center justify-center bg-zinc-800 pt-24"
>
	{#if loading}
		<section class="flex flex-col items-center justify-center gap-4">
			<div
				class="flex size-10 animate-spin items-center justify-center rounded-full border border-l-0 border-r-0 border-t-0 border-b-blue-500"
			></div>
			<h3 class="text-2xl font-thin text-white">Carregando ...</h3>
		</section>
	{:else}
    <section class="w-5xl flex flex-col scroll-smooth min-h-screen">
		{#each datas as data}

                <Post id={data.id} title={data.title} body={data.body} />
            
		{/each}
    </section>
	{/if}
</main>
