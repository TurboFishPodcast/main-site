<svelte:head>
	<title>Responsive - Events</title>
	<Head title="Responsive - Events" description="We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!" />
</svelte:head>

<script>
  import Head from "../comps/Head.svelte";
  import Navbar from "../comps/Navbar.svelte";
  import Footer from "../comps/Footer.svelte";
  import Header from "../comps/Header.svelte";
	import Article from "../comps/Article.svelte";
	
	let date = new Date('2021-05-28T04:00:00.000Z');
	let minutes;
	setInterval(function(){
		// @ts-expect-error
		minutes = Math.round(((date - new Date()) / 1000 / 60));
	}, 10000);
</script>

<Navbar />

<Header>Events</Header>
<Article title="About">
	We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!
</Article>
<Article title="What's Happening">
	<h2>No Events to Show</h2>
</Article>

<Footer />

<style>
	p {
		display: block;
		margin: 2rem 0;
	}
</style>