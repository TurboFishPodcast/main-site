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
	
	let minutes = Math.round(((new Date('2021-02-01T17:00:00.000Z') - new Date()) / 1000 / 60));
	setInterval(function(){
		minutes = Math.round(((new Date('2021-02-01T17:00:00.000Z') - new Date()) / 1000 / 60));
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
	<strong>Deadline:</strong> February 1st, 12pm EST ({@html Math.round(minutes / 60)} hours and {@html minutes % 60} minutes left)<br>
	<strong>Submissions:</strong> <a target="_blank" href="https://forms.gle/e7doRjf6oi6dYgCg8">https://forms.gle/e7doRjf6oi6dYgCg8</a>
	<p>Build either a game or program which the user can only press keys if instructed to! For example, if you have a game in which the user moves around with the WSAD keys, the game will have to strictly tell the user when to press the keys.</p>
	<p>The one and only requirement:</p>
	<ul>
	<li>The user can only press a key if the program or game tells them to</li>
	</ul>
	<p>Everything else is up to you.</p>
	<i>To further explain: You cannot just say "use wasd to move" and call it a day. Each time the user would need to hit say the "w" key, you'd need to explicitly tell them to every single time</i>
	<i>Check out the event in our <a target="_blank" href="https://discord.gg/semsxbP">Discord server</a> for more info</i>
</Article>

<Footer />