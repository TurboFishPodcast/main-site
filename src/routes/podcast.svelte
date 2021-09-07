<script>
	import Head from "../comps/Head.svelte";
	import Header from '../comps/Header.svelte';
	import Article from '../comps/Article.svelte';
	import Button from '../comps/Button.svelte';
</script>

<Head title="Responsive | Podcast" description="Three guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered." />
<meta http-equiv="refresh" content="0; url = https://anchor.fm/responsive" />

<Header>The Responsive Podcast</Header>

<Article>
	<i>If this doesn't happen automatically just click the button below<br><br></i>
	<center>
		<Button icon="/social/anchor.svg" href="https://anchor.fm/responsive" external={true}>Redirect</Button>
	</center>
</Article>