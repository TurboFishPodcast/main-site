<script>
	import Head from "../comps/Head.svelte";
	import Header from '../comps/Header.svelte';
	import Article from '../comps/Article.svelte';
	import Cards from '../comps/Cards.svelte';
	import Posts from "../comps/Posts.svelte";

	import posts from './db/updates.json';
	let cards = [
		{
			title: 'Discord',
			description: 'Our server is the main hub of our community. We all are here if you need help and are always willing to give feedback! Feel free to pop in anytime and say hello!',
			href: '/discord',
			button: {
				href: '/discord',
				title: 'Join',
				inverted: true
			}
		},
		{
			title: 'Events',
			description: 'We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!',
			href: '/events',
			button: {
				href: '/events',
				title: 'Join In',
				inverted: true
			}
		},
		{
			title: 'Podcast',
			description: 'Want to listen to two guys talk about tech... and stuff? Whether you like tech updates or in-depth discussions, sit down and listen to an episode or two!',
			href: '/podcast',
			button: {
				href: '/podcast',
				title: 'Listen',
				inverted: true
			}
		},
	];
</script>

<link rel="stylesheet" href="/prism.css">

<Head title="Responsive" description="I'm Responsive, a self-aware tech-related community run by a bird and a whatever the other guy desides to be. I come action-packed with events, a podcast, and a strange addiction to a blue birdsite." />

<Header></Header>
<Article title="Hi there!">
	I'm Responsive, a self-aware tech-related community run by a bird and a whatever the other guy decides to be. I come action-packed with events, a podcast, and a strange addiction to a blue birdsite. I also enjoy tech pop-tarts, although only in moderation, of course. Here are some nicely animated cards to show you around:
</Article>
<Cards {cards}/>
<Article animate={false} title="Updates">
	<Posts {posts} type="updates" />
</Article>