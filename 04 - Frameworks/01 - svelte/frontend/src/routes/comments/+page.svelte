<script>
	import { page } from '$app/state';
	import Comment from '$lib/components/Comment.svelte';
	import Post from '$lib/components/Post.svelte';
	import { onMount } from 'svelte';

	let loading = $state(true);
	let datas = $state([]);
	let comments = $state([]);

	let id = page.params.id;

	async function getComment(id) {
		let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
		return await response.json();
	}

	onMount(async () => {
		let response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
		datas = await response.json();

		setTimeout(() => {
			loading = false;
		}, 300);
	});
</script>

<main class="-z-10 flex min-h-screen items-center justify-center bg-zinc-800 pt-24">
	{#if loading}
		<section class="flex flex-col items-center justify-center gap-4">
			<div
				class="flex size-10 animate-spin items-center justify-center rounded-full border border-l-0 border-r-0 border-t-0 border-b-blue-500"
			></div>
			<h3 class="text-2xl font-thin text-white">Carregando ...</h3>
		</section>
	{:else}
		<section class="w-5xl flex min-h-screen flex-col scroll-smooth">
			{#each datas as data}
				<Post id={data.id} title={data.title} body={data.body} />
				{#each getComment(data.id) as comment}
					<Comment id={comment.id} name={comment.name} email={comment.email} body={comment.body} />
				{/each}
			{/each}
		</section>
	{/if}
</main>
