<svelte:head>
	<title>Responsive - Blog</title>
	<Head title="Responsive - Blog" description="We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!" />
</svelte:head>

<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
  import Head from "../comps/Head.svelte";
  import Navbar from "../comps/Navbar.svelte";
  import Footer from "../comps/Footer.svelte";
  import Header from "../comps/Header.svelte";
	import Article from "../comps/Article.svelte";

	export let title;
</script>

<Navbar />

<Header>Error</Header>
<Article>
	{title}
</Article>

<Footer />