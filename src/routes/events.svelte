<svelte:head>
	<title>Responsive - Events</title>
	<Head title="Responsive - Events" description="We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after." />
</svelte:head>

<script>
  import Head from "../comps/Head.svelte";
  import Navbar from "../comps/Navbar.svelte";
  import Footer from "../comps/Footer.svelte";
  import Header from "../comps/Header.svelte";
	import Article from "../comps/Article.svelte";
	
	let date = new Date('2021-05-28T04:00:00.000Z');
	setInterval(function(){
		minutes = Math.round(((date - new Date()) / 1000 / 60));
	}, 10000);
</script>

<style>
	p {
		display: block;
		margin: 2rem 0;
	}
</style>

<Navbar />

<Header title="Events">
	We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after.
</Header>
<Article title="What's Happening">
	<h2>No Events to Show</h2>
</Article>

<Footer />