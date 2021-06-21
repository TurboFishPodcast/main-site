<script>
  import Head from "../../comps/Head.svelte";
  import Header from "../../comps/Header.svelte";
	import Article from "../../comps/Article.svelte";
	import Posts from "../../comps/Posts.svelte";

	import files from '../db/posts.json';
</script>

<Head	title="Responsive | Blog"	description="The Responsive Blog, who knew this existed?" />

<Header>Blog</Header>
<Article animate={false} title="Recent Articles">
	<Posts {files} />
</Article>