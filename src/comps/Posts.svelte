<script>
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import localizedFormat from 'dayjs/plugin/localizedFormat';
	dayjs.extend(relativeTime);
	dayjs.extend(localizedFormat);

	export let files;
</script>

<div class="posts">
	{#each files as file}
		<a class="post" href="/blog/{file.slug}">
			<h2 class="title">{file.title ?? file.slug}</h2>
			<p>By <a target="_blank" rel="external" href={file.link ?? 'https://twitter.com/RespDev'}>{file.author ?? 'Responsive'}</a> (<i title={dayjs(file.date).format('LLL') ?? 'Unknown Date'}>{dayjs(file.date).fromNow() ?? 'No Date'}</i>)</p>
			<p>"{file.description ?? ''}"</p>
		</a>
	{/each}
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

	.post {
		min-width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: cneter;
		background-color: var(--primary-text);
		color: var(--secondary-color);
		flex: 1;
		border-radius: 10px;
		padding: 0.6rem;
		margin: 0.6rem 0;
		text-decoration: none;
		transition: 150ms ease-out;
	}
	.post:hover {
		box-shadow: 0 4px 20px #00000044;
		transform: scale(1.04);
	}

	h2 {
		margin: 0;
		font-size: 1.6rem;
	}
</style>