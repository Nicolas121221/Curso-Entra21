<script>
	let { id, name, email, body } = $props();
</script>

<section class="mb-3 rounded-sm bg-zinc-900/50 p-6 font-sans text-lg text-white">
	<h5 class="w-full font-bold"><span class="text-4xl text-blue-700 mr-2">{id}</span>{name}<span class="text-xs opacity-25 ml-2">{email}</span></h5>
	<p class="w-2xl mt-2">{body}</p>
</section>
