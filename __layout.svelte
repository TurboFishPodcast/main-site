<svelte:head>
	<title>Responsive - Blog</title>
	<Head title="Responsive - Blog" description="We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!" />
</svelte:head>

<script>
  import Head from "./src/comps/Head.svelte";
  import Navbar from "./src/comps/Navbar.svelte";
  import Footer from "./src/comps/Footer.svelte";
  import Header from "./src/comps/Header.svelte";
	import Article from "./src/comps/Article.svelte";
	import Button from './src/comps/Button.svelte';
</script>

<Navbar />

<Header>Blog</Header>
<Article>
	<slot></slot>
</Article>

<Footer />