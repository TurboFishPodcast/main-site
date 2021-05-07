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
	
	let date = new Date('2021-05-28T04:00:00.000Z');
	let minutes = Math.round(((date - new Date()) / 1000 / 60));
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
	<p>Hi everyone! I hope everyone is doing well with their finals and the rest!</p>
		<p>This is the Nth jam we&#39;ve had (no idea what number we&#39;re actually on). But guess what? It&#39;s 3 weeks this time!</p>
		<p>The theme: <strong>puzzles</strong>! </p>
		<p><strong>Starts on: Friday, May 7th</strong> (today)<br>
		<strong>Ends on: Friday, May 28th</strong><br>
		<u>You have 3 weeks (21days)</u></p>
		<p><u>Submit To:</u><br>
		<a href="https://forms.gle/e7doRjf6oi6dYgCg8">https://forms.gle/e7doRjf6oi6dYgCg8</a></p>
		<p><u>Requirements:</u><br>
		Only requirement is that you have to create some sort of puzzle. That&#39;s it.</p>
		<p><u>Bonus Points:</u></p>
			<ul>
				<li>You can also add several levels to make it longer!</li>
				<li>You can combine multiple puzzle concepts at once!</li>
			</ul>
		<p><u>Judging:</u><br>
		After the jam is up, everyone in the server will be able to vote on who they thought made the best creation.</p>
		<p><u>Prize:</u><br>
		Undefined.</p>
		<p>(A custom role in the <a href="/discord">server</a>, and unlimited bragging rights)</p>
		<p><em>Best of luck!</em></p>
		
</Article>

<Footer />