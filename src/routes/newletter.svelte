<script>
  import Navbar from "./_components/Navbar.svelte";
  import Footer from "./_components/Footer.svelte";
  import Header from "./_components/Header.svelte";
	import Article from "./_components/Article.svelte";
	import Button from "./_components/Button.svelte";
	
	import commonmark from "commonmark";
	import files from "../../static/newsletter.json";
	files.list.reverse();
	const reader = new commonmark.Parser();
	const writer = new commonmark.HtmlRenderer();
	let article = {
		content: '',
		title: '',
		date: ''
	};
	const strToDate = str => {
		return new Date(`${str}T17:00:00.000Z`).toLocaleDateString();
	};
	const getArticle = (href, e) => {
		if (!query.has('article')) window.history.pushState({}, '', window.location.href + '?article=' + href);
		let title = e ? files.list[e.target.dataset.text].title : files.list.find(el => el.date === href).title;
		let date = e ? files.list[e.target.dataset.text].date : files.list.find(el => el.date === href).date;
		href = files.list.find(el => el.date === href).href;
		document.title = `Responsive | ${href.split(' - ')[1].replace('.md', '')}`;
		return fetch(`/newsletters/${href}`)
		.then(res => res.text())
		.then(text => {
			article.content = writer.render(reader.parse(text)).replace(/(<a href=")(?!#)/g, '<a target="_blank" href="');
			article.title = title;
			article.date = strToDate(date);
		});
	};
	const query = new URLSearchParams(window.location.search);
	if (query.has('article')) {
		getArticle(query.get('article'))
		.catch(err => {
			window.location.href = '/newsletter';
		});
	}
	const click = (e) => {
		getArticle(files.list[e.target.dataset.text].date, e);
	};
</script>

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
		<Button href="javascript:void()" title={`${strToDate(file.date)} - ${file.title}`} click={click} inverted={files.list.indexOf(file) === 0} data={files.list.indexOf(file)}></Button>
		{/each}
	</Article>
{/if}

<Footer />