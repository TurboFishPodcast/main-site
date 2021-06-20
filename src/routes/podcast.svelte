<script>
	import Head from "../comps/Head.svelte";
	import Header from '../comps/Header.svelte';
	import Article from '../comps/Article.svelte';
	import Button from '../comps/Button.svelte';
</script>

<Head title="Responsive | Podcast" description="Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered." />

<Header>The Responsive Podcast</Header>
<Article title="Our Podcast">
	The Responsive Podcast is a podcast that releases eposides at least two times a month with each episode being around 30 minutes to an hour long. We enjoy sharing tips, tricks, and tools for everything development. Leon and I are widely open to feedback, so even simple suggestion such as to turn up one of our mics, please feel free to ask!
</Article>

<center>
	<Button href="https://anchor.fm/responsive" icon="/social/anchor.png" external={true}>
		Take a Listen
	</Button>
</center>