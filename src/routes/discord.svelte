<script>
	import Head from '../comps/Head.svelte';
	import Navbar from '../comps/Navbar.svelte';
	import Footer from '../comps/Footer.svelte';
	import Header from '../comps/Header.svelte';

	let header = {
		title: 'Discord',
		button: {
			href: 'https://discord.gg/UKQUkhjxRT',
			title: 'Redirect',
			icon: '/social/discord.png'
		}
	};
</script>

<svelte:head>
	<title>Responsive - Events</title>
	<Head
		title="Responsive - Discord"
		description="Responsive is more than just a Discord server, we're an action-packed tech-oriented community that always has something new in store! Join us for exciting new ideas and events!"
	/>
	<meta http-equiv="refresh" content="2; url = https://discord.gg/UKQUkhjxRT" />
</svelte:head>

<Navbar />

<Header {...header}>
	Redirecting you to the server...<br /><br />
	<i>If this doesn't happen automatically just click the button below</i>
</Header>

<Footer />
