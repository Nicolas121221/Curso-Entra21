<script>
	import '../app.css';

	let { children } = $props();
</script>

<nav class="bg-zinc-950 fixed top-0 right-0 left-0 flex text-white justify-between px-10 items-center py-2">
    <h3 class="text-2xl font-sans font-semibold"><a class="hover:text-blue-700 duration-150" href="/">Blog</a></h3>
    <ul class="flex capitalize gap-3">
        <li><a class="hover:text-blue-700 duration-150" href="/posts">Posts</a></li>
    </ul>
</nav>

{@render children()}
