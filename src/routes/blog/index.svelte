<script context="module">
	export async function load({page, fetch}) {
		const params = page.params;
		const res = await fetch('https://respdev-blog.deno.dev/page/0');
		const posts = (await res.json()).posts;

		if (posts) {
			return {
				props: {
					posts
				}
			};
		}
	}
</script>

<script>
  import Head from "../../comps/Head.svelte";
  import Header from "../../comps/Header.svelte";
	import Article from "../../comps/Article.svelte";
	import Posts from "../../comps/Posts.svelte";

	export let posts;
</script>

<Head	title="Responsive | Blog"	description="The Responsive Blog, who knew this existed?" />

<Header>Blog</Header>
<Article animate={false} title="Recent Articles">
	<Posts {posts} />
</Article>