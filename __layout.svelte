<svelte:head>
	<Head title="Responsive | Blog" description="The Responsive Blog, who knew this existed?" />
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