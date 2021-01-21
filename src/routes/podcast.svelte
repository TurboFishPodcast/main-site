<svelte:head>
  <title>Responsive - Podcast</title>
</svelte:head>

<script>
	import Navbar from '../components/Navbar.svelte';
  import Footer from "../components/Footer.svelte";
	import Header from '../components/Header.svelte';
	import Article from '../components/Article.svelte';
	let header = {
		title: 'The Responsive Podcast',
		button: {
			title: 'Episodes',
			href: 'https://anchor.fm/responsive',
			icon: '/social/anchor.png',
			blank: true
		}
	};
</script>

<Navbar />
<Header {...header}>
	Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered.
</Header>
<Article title="Our Podcast">
	The Responsive Podcast is a podcast that releases eposides at least two times a week with each episode being an hour and a half long. We enjoy sharing tips, tricks, and tools for everything development. Leon and I are widely open to feedback, so even simple suggestion such as to turn up one of our mics, please feel free to ask! At the bottom of this page, you will find the various ways to contact us.
</Article>

<Footer />