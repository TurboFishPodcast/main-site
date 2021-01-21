<svelte:head>
  <title>Responsive - Events</title>
</svelte:head>

<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
	import Article from "../components/Article.svelte";
	
	let minutes = Math.round(((new Date('2021-01-19T17:00:00.000Z') - new Date()) / 1000 / 60));
	setInterval(function(){
		minutes = Math.round(((new Date('2021-01-19T17:00:00.000Z') - new Date()) / 1000 / 60));
	}, 10000);
</script>

<style>
</style>

<Navbar />

<Header title="Events">
	We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after.
</Header>
<Article title="What's Happening">
	<h2>Frontend/CLI Jam</h2>
	<strong>Deadline:</strong> January 19th, 12pm EST ({@html Math.round(minutes / 60)} hours and {@html minutes % 60} minutes left)<br>
	<strong>Submissions:</strong> <a href="https://forms.gle/e7doRjf6oi6dYgCg8">https://forms.gle/e7doRjf6oi6dYgCg8</a>
	<p>
		Build a to-do list app! Make either a frontend or CLI. It has to support:
	</p>
	<ul>
		<li>Adding/removing tasks</li>
		<li>Renaming tasks</li>
		<li>Checking/unchecking tasks</li>
	</ul>
	<i>Check out the event in our <a href="https://discord.gg/semsxbP">Discord server</a> for more info</i>
</Article>

<Footer />