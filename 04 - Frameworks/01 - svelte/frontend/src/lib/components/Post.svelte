<script>
	let { id, title, body } = $props();
</script>

<section class="w-3xl font-sans text-lg my-10">
	<h4 class="text-white w-2xl text-xl capitalize hover:text-blue-600 duration-150 mb-2"><a href="/posts/{id}">{title}</a></h4>
    <p class="indent-10 w-sm text-gray-400 text-justify">{body}</p>
</section>
