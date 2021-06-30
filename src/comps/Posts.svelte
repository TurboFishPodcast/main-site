<script>
	import Article from './Article.svelte';

	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	import localizedFormat from 'dayjs/plugin/localizedFormat.js';
	dayjs.extend(relativeTime);
	dayjs.extend(localizedFormat);

	export let posts = [], type = 'blog';
	if (type !== 'events') posts = posts.filter(el => new Date() >= new Date(el.date)); // post date is less than or equal to current date
</script>

<div class="posts {type}">
	<slot></slot>
	{#each posts as post}
		{#if type === 'blog'}
			<a class="wrapper" href="/blog/{post.slug}">
				<div class="post">
					<h2 class="title">{post.title ?? post.slug}</h2>
					<p>
						<span>By
							{#each post.authors as author, i}
								<a target="_blank" rel="external" href={author.link ?? 'https://twitter.com/RespDev'}>{author.name ?? 'Responsive'}</a>{i !== post.authors.length - 1 && post.authors.length > 1 ? ', ' : ''}
							{/each}
						</span>
						<span>(<i title={dayjs(post.date).format('LL') ?? 'Unknown Date'}>{dayjs(post.date).fromNow() ?? 'No Date'}</i>)</span>
					</p>
					<p>"{post.description ?? ''}"</p>
				</div>
			</a>
		{:else if type === 'updates' || type === 'events'}
			<a class="wrapper" href="{post.link}">
				<div class="post updates">
					<h2 class="title">{post.title?? ''}</h2>
					{#if post.title}
						<p>{post.description ?? ''}</p>
						{:else}
						<p><b>{post.description ?? ''}</b></p>
					{/if}
					<p>
						{#if type === 'updates'}
							<i title={dayjs(post.date).format('LLL') ?? 'Unknown Date'}>{dayjs(post.date).fromNow() ?? 'No Date'}</i><br>
						{:else if type === 'events'}
							{#if post.endDate}
								<i title={dayjs(post.endDate).format('LLL') ?? 'Unknown Date'}>Ends {dayjs(post.endDate).fromNow() ?? 'No Date'}</i><br>
							{:else}
								<i title={dayjs(post.date).format('LLL') ?? 'Unknown Date'}>Starts {dayjs(post.date).fromNow() ?? 'No Date'}</i><br>
							{/if}
						{/if}
						{#if post.link}
							<a href="{post.link}">Read More</a>
						{/if}
					</p>
				</div>
			</a>
		{/if}
	{/each}
	{#if type === 'blog'}
		<Article>
			<center>
				<a href="https://github.com/ResponsiveDev/blog" rel="external">Contribute</a>
			</center>
		</Article>
	{/if}
</div>

<style>
	.posts {
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		font-size: 1.2rem;
		width: max-content;
		max-width: 100%;
	}
	.posts.updates {
		width: 100%;
		padding: 2vh;
	}

	.wrapper {
		text-decoration: none;
		color: var(--primary-text);
		cursor: pointer;
	}

	.post {
		min-width: 300px;
		display: flex;
		flex-direction: column;
		background-color: var(--tertiary-color);
		flex: 1;
		border-radius: 10px;
		padding: 0.6rem;
		margin: 0.6rem 0;
		transition: 150ms ease-out;
	}
	.post:hover {
		box-shadow: 0 4px 20px #00000044;
		transform: scale(1.04);
	}

	.post.updates:hover {
		box-shadow: 0 4px 20px #00000044;
		transform: scale(1.02);
	}

	h2 {
		margin: 0;
		font-size: 1.6rem;
	}
</style>