<script context="module">
	export async function load({page, fetch}) {
		const params = page.params;
		const res = await fetch(`https://responsivedev.github.io/blog/dist/${params.slug}.json`);
		const data = await res.json();

		if (data) {
			return {
				props: {
					article: data
				}
			};
		}
	}

	export const prerender = true;
</script>

<script>
  import Head from "../../comps/Head.svelte";
  import Header from "../../comps/Header.svelte";
	import Article from "../../comps/Article.svelte";

	import dayjs from 'dayjs';
	import localizedFormat from 'dayjs/plugin/localizedFormat.js';
	dayjs.extend(localizedFormat);

	import * as cm from 'commonmark';
	const reader = new cm.Parser();
	const writer = new cm.HtmlRenderer({softbreak: '<br>'});
	const parse = text => writer.render(reader.parse(text));

	export let article;
</script>

<Head	title="{article.title ?? article.id} | Responsive Blog"	description={article.summary ?? 'The Responsive Blog, who knew this existed?'} />

<Header>{article.title ?? article.id}</Header>
<div id="post">
	<Article>
		<a href="/blog">&lt;- Back</a><br>
		<i>Posted: {dayjs(article.date_published).format('LL')}</i><br>
		<i>Written by:
			{#each article.authors as author, i}
				<a target="_blank" rel="external" href={author.url ?? 'https://twitter.com/RespDev'}>{author.name ?? 'Responsive'}</a>{i !== article.authors.length - 1 && article.authors.length > 1 ? ', ' : ''}
			{/each}
		</i>
		{@html article.content_html ? parse(article._content_md) : 'Error: Article is missing content'}
	</Article>
	<Article>
		<center>
			<a href="https://github.com/ResponsiveDev/blog" rel="external">Contribute</a>
		</center>
	</Article>
</div>

<style>
:global(#post h1, #post h2) {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(250, 250, 250, 0.3);
}
:global(#post h1:not(:first-of-type)) {
  margin-top: 4rem;
}
:global(#post h2) {
  border: none;
}
:global(#post blockquote) {
  padding-left: 2rem;
  border-left: 6px solid rgba(250, 250, 250, 0.8);
  background-color: #373737;
}
:global(#post p) {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
:global(#post img) {
  max-width: 50%;
}
:global(#post code) {
  padding: 2px;
  border-radius: 2px;
  background-color: #373737;
  color: #ff4a77;
}
:global(#post pre > code) {
  padding: 0;
}
:global(#post pre) {
  padding: 4px;
  width: max-content;
  border-radius: 2px;
  background-color: #373737;
}
</style>