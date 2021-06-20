<svelte:head>
	<title>Responsive - Blog</title>
	<Head title="Responsive - Blog" description="We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!" />
</svelte:head>

<script context="module">
	import db from '../../posts.json';

	export async function load({page, fetch}) {
		const params = page.params;
		const article = db.find(el => el.slug === params.slug);

		if (article) {
			return {
				props: {
					article
				}
			};
		}
	}
</script>

<script>
  import Head from "../../comps/Head.svelte";
  import Navbar from "../../comps/Navbar.svelte";
  import Footer from "../../comps/Footer.svelte";
  import Header from "../../comps/Header.svelte";
	import Article from "../../comps/Article.svelte";

	export let article = {};
</script>

<Navbar />

<Header>{article.title ?? article.slug}</Header>
<Article>
	{article.content}
</Article>

<Footer />