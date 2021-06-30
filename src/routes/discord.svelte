<script>
	import Head from '../comps/Head.svelte';
	import Header from '../comps/Header.svelte';
	import Article from '../comps/Article.svelte';
	import Button from '../comps/Button.svelte';

	let header = {
		title: 'Discord',
		button: {
			href: 'https://discord.gg/UKQUkhjxRT',
			title: 'Redirect',
			icon: '/social/discord.svg'
		}
	};
</script>

<Head
	title="Responsive | Discord"
	description="Responsive is more than just a Discord server, we're an action-packed tech-oriented community that always has something new in store! Join us for exciting new ideas and events!"
/>
<meta http-equiv="refresh" content="0; url = https://discord.gg/UKQUkhjxRT" />

<Header>
	Redirecting...
</Header>

<Article>
	<i>If this doesn't happen automatically just click the button below<br><br></i>
	<center>
		<Button icon="/social/discord.svg" href="https://discord.gg/UKQUkhjxRT">Redirect</Button>
	</center>
</Article>
