<script>
  import Head from "../../comps/Head.svelte";
  import Header from "../../comps/Header.svelte";
	import Article from "../../comps/Article.svelte";
	import Button from "../../comps/Button.svelte";
	import Posts from "../../comps/Posts.svelte";
	import Loader from "../../comps/Loader.svelte";

	let posts = [];
	let page = 0;
	let next = false;

	(async () => {
		const res = await fetch(`https://respdev-blog.deno.dev/page/${page}`);
		const json = await res.json();
		posts = json.posts.reverse();
		next = json.next;
	})();
</script>

<Head	title="Responsive | Blog"	description="The Responsive Blog, who knew this existed?" />

<Header>Blog</Header>
<Article title="Recent Articles">
	<Loader bool={posts?.length === 0} />
	<Posts {posts}>
		{#if page > 0}
		<Button>Prev</Button>
		{:else if next}
		<Button>Next</Button>
		{/if}
	</Posts>
</Article>