<script>
  import Head from "../comps/Head.svelte";
  import Header from "../comps/Header.svelte";
	import Article from "../comps/Article.svelte";
	import Button from '../comps/Button.svelte';
	import Posts from "../comps/Posts.svelte";
	import Loader from "../comps/Loader.svelte";

	import { onMount } from 'svelte';

	let posts = [];

	onMount(async () => {
		const res = await fetch('/events.json');
		posts = await res.json();
	});
</script>

<Head title="Responsive | Events" description="We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!" />

<Header>Events</Header>
<Article title="About">
	We host a variety of events such as hackathons, monthly themes, and open discussions! All events are open to any language or skillset!
</Article>
<Article title="What's Happening">
	{#if posts?.length}
		<Posts {posts} type="events" />
	{:else}
		<h2>No Events to Show</h2>
	{/if}
</Article>

<center>
	<Button href="/discord" icon="/social/discord.svg">
		Join In
	</Button>
</center>