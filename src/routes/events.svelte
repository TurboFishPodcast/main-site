<svelte:head>
	<title>Responsive - Events</title>
	<Head title="Responsive - Events" description="We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after." />
</svelte:head>

<script>
  import Head from "../components/Head.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
	import Article from "../components/Article.svelte";
	
	let minutes = Math.round(((new Date('2021-01-25T17:00:00.000Z') - new Date()) / 1000 / 60));
	setInterval(function(){
		minutes = Math.round(((new Date('2021-01-25T17:00:00.000Z') - new Date()) / 1000 / 60));
	}, 10000);
</script>

<style>
</style>

<Navbar />

<Header title="Events">
	We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after.
</Header>
<Article title="What's Happening">
	<h2>Mini-Jam</h2>
	<strong>Deadline:</strong> January 25th, 12pm EST ({@html Math.round(minutes / 60)} hours and {@html minutes % 60} minutes left)<br>
	<strong>Submissions:</strong> <a target="_blank" href="https://forms.gle/e7doRjf6oi6dYgCg8">https://forms.gle/e7doRjf6oi6dYgCg8</a>
	<p>Build a code cracker! You can do this however you&#39;d like, using any techniques you know. Rule wise, as long as the actual cracking algorithm doesn&#39;t know the code length or the code itself, it&#39;s good.</p>
	<p>The things your cracker must have:</p>
	<ul>
	<li>User input for the code they want the algorithm to guess.</li>
	<li>Output which shows the original code and the code as guessed by the algorithm.</li>
	</ul>
	<p>Anything else is up to you.</p>
	<i>Check out the event in our <a target="_blank" href="https://discord.gg/semsxbP">Discord server</a> for more info</i>
</Article>

<Footer />