<svelte:head>
  <title>{article.href ? 'Responsive | ' + article.href : 'Responsive - Newsletter'}</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
	import Article from '../components/Article.svelte';
	import Button from '../components/Button.svelte';
	
	import { Converter } from 'showdown';
	import files from '../../static/newsletter.json';
	files.list.reverse();

	const converter = new Converter();
	let article = {};

	const strToDate = str => {
		return new Date(`${str}T17:00:00.000Z`).toLocaleDateString();
	};

	const getArticle = (href, e) => {
		if (!query.has('article')) window.history.pushState({}, '', window.location.href + '?article=' + href);
		if (e) {
			article = files.list[e.target.dataset.text];
		} else {
			article = files.list.find(el => el.date === href);
		}

		return fetch(`/newsletters/${article.href}`)
		.then(res => res.text())
		.then(text => {
			article.content = converter.makeHtml(text).replace(/(<a href=")(?!#)/g, '<a target="_blank" href="');
			article.date = strToDate(article.date);
		});
	};
	
	const click = (e) => {
		getArticle(files.list[e.target.dataset.text].date, e);
	};

	let query;
	onMount(() => {
		query = new URLSearchParams(window.location.search);
		if (query.has('article')) {
			getArticle(query.get('article'))
			.catch(err => {
				window.location.href = '/newsletter';
			});
		}
	});
</script>

<style>
:global(.article h1, .article h2) {
	margin-top: 2rem;
	margin-bottom: 0.5rem;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid rgba(250, 250, 250, 0.3);
}

:global(.article h1:not(:first-of-type)) {
	margin-top: 4rem;
}

:global(.article h2) {
	border: none;
}

:global(.article blockquote) {
	border-left: 6px solid rgba(250, 250, 250, 0.8);
	padding-left: 2rem;
	background-color: rgba(250, 250, 250, 0.1);
}

:global(.article p) {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>

<Navbar />

{#if article.title}
	<Header title={article.title}>
	</Header>
	<Article animate={false}>
		<i>Posted on: {@html article.date}</i>
		{@html article.content}
	</Article>
{:else}
	<Header title="Newsletter">
		We release a weekly newsletter every Monday around 12pm EST. If we're feeling exceptional, we may even release another one on the Friday of the same week!
	</Header>
	<Article title={article.title || 'What\'s Cooking'}>
		{#each files.list as file}
		<Button href="javascript:void(0)" title={`${strToDate(file.date)} - ${file.title}`} click={click} inverted={files.list.indexOf(file) === 0} data={files.list.indexOf(file)}></Button>
		{/each}
	</Article>
{/if}

<Footer />