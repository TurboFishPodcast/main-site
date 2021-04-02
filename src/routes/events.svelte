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
	
	let minutes = Math.round(((new Date('2021-04-17T04:00:00.000Z') - new Date()) / 1000 / 60));
	setInterval(function(){
		minutes = Math.round(((new Date('2021-04-17T04:00:00.000Z') - new Date()) / 1000 / 60));
	}, 10000);
</script>

<style>
</style>

<Navbar />

<Header title="Events">
	We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after.
</Header>
<Article title="What's Happening">
	<h2>Sci-Fi Interface Contest</h2>
	<p><strong><strong>This jam will be based around sci-fi interfaces!</strong></strong> Your UI can be whatever you want, this is a design &amp; creativity contest! The more gizmos, animations, and sci-fi flair, the better! A good reference for your UI would be sci-fi interfaces used in movies and TV shows. Be creative!</p><br>
	<p>PS: If you only know a language that can&#39;t do GUIs but can do CLIs, that works too! (choose what you&#39;re most comfortable with)</p><br>
	<p><strong><strong>Winning PRIZE:</strong> 1 month of Discord Nitro</strong></p>
	<p><strong>Starts on:</strong> Friday, April 2nd
	<strong>Ends on:</strong> Friday, April 16th</p>
	<p><strong>Submit To:</strong> &lt;#782047133254942730&gt; or <a href="https://forms.gle/e7doRjf6oi6dYgCg8">https://forms.gle/e7doRjf6oi6dYgCg8</a></p><br>
	<p><strong><strong>Requirements:</strong></strong></p>
	<ol>
	<li>Your UI <strong>MUST</strong> be created with code, no graphic design software or animation software should be used</li>
	<li>Your UI must have the following:</li>
	<li>A popup/popout with at least 1 form of input (eg: a right-click menu with buttons)</li>
	<li>At least 3 different types of input (buttons, sliders, pages, dials, textboxes, dropdowns, etc)</li>
	</ol>
	<p><strong><strong>Bonus Points:</strong></strong></p>
	<ul>
	<li>Although functionality isn&#39;t really important outside of a UI standpoint, if you add scripting to your UI to have buttons and knobs change values and change display graphics, you&#39;ll get some sweet bonus points!</li>
	<li>For the web devs out there, SVG animations would be a great touch!</li>
	</ul>
	<p><strong><strong>Judging:</strong></strong><br>
	This event will be judged by one or more judges (I won&#39;t be a judge as I&#39;ll be participating with you guys 🙌)</p>		
</Article>

<Footer />