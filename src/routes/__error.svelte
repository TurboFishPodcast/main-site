<svelte:head>
	<Head title="Responsive | Error" description="If you're seeing this, someone decided to share an error page" />
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