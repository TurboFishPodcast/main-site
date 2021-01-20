<svelte:head>
  <title>Responsive - Home</title>
</svelte:head>

<script>
	import Navbar from './_components/Navbar.svelte';
  import Footer from "./_components/Footer.svelte";
	import Header from './_components/Header.svelte';
	import Article from './_components/Article.svelte';
	import Cards from './_components/Cards.svelte';
	let header = {
		title: 'Welcome to Responsive!',
		button: {
			href: 'https://discord.gg/semsxbP',
			title: 'Join Us',
			icon: '/social/discord.png'
		}
	};
	let cards = [
		{
			title: 'Discord',
			description: 'Our server is the main hub of our community with an active userbase of more than 100 members. We all are here if you need help and are always willing to give feedback! Feel free to pop in anytime and say hello!',
			href: 'https://discord.gg/semsxbP',
			button: {
				href: 'https://discord.gg/semsxbP',
				title: 'Join',
				inverted: true
			}
		},
		{
			title: 'Events',
			description: 'We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone, even late-arrivals! Most of these events last for about a week, and the results come out 1-3 days after.',
			href: '/events',
			button: {
				href: '/events',
				title: 'Sign Up',
				inverted: true
			}
		},
		{
			title: 'Podcasts & Streams',
			description: 'We host a stream at least once per week and release a podcast episode twice per week. Learn more about the podcast <a href="/podcast">here</a> and check out our <a href="https://twitch.tv/vandesm14">Twitch</a> for our livestreams.',
			href: '/podcast',
			button: {
				href: '/podcast',
				title: 'Listen',
				inverted: true
			}
		},
		{
			title: 'Newsletter',
			description: 'We release a weekly newsletter every Monday at 12pm EST. If we\'re feeling exceptional, we may even release another one on the Friday of the same week!',
			href: '/newsletter',
			button: {
				href: '/newsletter',
				title: 'Read',
				inverted: true
			}
		}
	];
</script>

<Navbar />
<Header {...header}>
	Responsive is a community which is related to development and technology. Whether you need help, are looking to share a project, or are just looking to be in an active community, we are your north star!
</Header>
<Article title="About Us">
	Welcome to Responsive, a <a href="https://discord.gg/semsxbP" target="_blank">community</a> based on tech and development of all kinds! Whether you want to share your ideas, assist others in their coding endeavors, or just want to mingle amongst the masses, this is the place for you! At Responsive, we host many <a href="/events">events</a> that range in variety: from <a href="https://twitch.tv/vandesm14" target="_blank">livestreams</a> and <a href="/podcast">podcasts</a> to code jams and hackathons. Get comfy, settle in, and begin your journey with the Responsive community!
</Article>
<Article title="Our Story">
	The Responsive community started out as just a simple <a href="https://twitch.tv/vandesm14" target="_blank">Twitch channel</a>. Leon (Leonski) and I (TheDevBird) created a <a href="https://discord.gg/semsxbP" target="_blank">Discord server</a> to help grow my Twitch community. At that point, all I streamed was web development projects. Since then, the community has grown at an exponential scale. Now, we're not only hosting streams, but regular conversation, <a href="/events">events</a>, and have even started a <a href="/podcast">podcast series</a>. For the future of Responsive, Leon and I plan on growing much larger than this, with our own help station, multiple events running in parallel, and even a whole stream-team & podcast group!
</Article>
<Cards {cards}/>

<Footer />