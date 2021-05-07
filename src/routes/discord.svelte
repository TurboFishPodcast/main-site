<svelte:head>
	<title>Responsive - Events</title>
	<Head title="Responsive - Events" description="We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after." />
</svelte:head>

<script>
  import Head from "../components/Head.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
	
	let header = {
		title: 'Discord',
		button: {
			href: 'https://discord.gg/semsxbP',
			title: 'Redirect',
			icon: '/social/discord.png'
		}
	};
</script>

<Navbar />

<Header {...header}>
	Redirecting you to the server...<br><br>
	<i>If this doesn't happen automatically just click the button below</i>
</Header>


<Footer />