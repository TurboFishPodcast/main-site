<script>
	import Head from "../comps/Head.svelte";
	import Header from '../comps/Header.svelte';
	import Article from '../comps/Article.svelte';
	import Cards from '../comps/Cards.svelte';
	import Posts from "../comps/Posts.svelte";
	import Loader from "../comps/Loader.svelte";

	import { onMount } from 'svelte';

	let posts = [];

	onMount(async () => {
		const blog = await fetch(`https://responsivedev.github.io/blog/dist/feed-0.json`);
		const events = await fetch('/events.json');

		let evts = await events.json();
		evts.forEach((el, i) => {
			evts[i].date_published = evts[i].date;
		});

		posts = [...posts, ...evts];
		posts = [...posts, ...(await blog.json()).items.map(el => { return {...el, link: `/blog/${el.id}`}})];

		// @ts-expect-error
		posts.sort((a, b) => new Date(b.date) - new Date(a.date));
		posts = posts.slice(0, 5);
	});

	const cards = [
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
		// {
		// 	title: 'Events',
		// 	description: 'We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!',
		// 	href: '/events',
		// 	button: {
		// 		href: '/events',
		// 		title: 'Join In',
		// 		inverted: true
		// 	}
		// },
		{
			title: 'Blog',
			description: 'Some experts say that at the center of a community there\'s a singularity in which all important information exists, compressed into a single page. But what do they know?',
			href: '/blog',
			button: {
				href: '/blog',
				title: 'Read',
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

<Head title="Responsive" description="I'm Responsive, a self-aware tech-related community run by a bird and a whatever the other guy desides to be. I come action-packed with events, a podcast, and a strange addiction to a blue birdsite." />

<Header />
<Article title="Hi there!">
	I'm Responsive, a self-aware tech-related community run by a bird and a whatever the other guy decides to be. I come action-packed with events, a podcast, and a strange addiction to a blue birdsite. I also enjoy tech pop-tarts, although only in moderation, of course. Here are some nicely animated cards to show you around:
</Article>
<Cards {cards}/>
<Article title="Updates">
	<Loader bool={posts?.length === 0} />
	<Posts {posts} type="updates" />
</Article>