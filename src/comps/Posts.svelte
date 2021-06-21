<script>
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	import localizedFormat from 'dayjs/plugin/localizedFormat.js';
	dayjs.extend(relativeTime);
	dayjs.extend(localizedFormat);

	export let files, type = 'blog';
	files = files.filter(el => new Date() >= new Date(el.date)); // post date is less than or equal to current date
	files.sort((a, b) => new Date(b.date) - new Date(a.date));

	let display = {};
	let open = false;

	const updateModal = (file, state) => {
		display = file;
		open = state;
	};
</script>

<div class="posts">
	{#each files as file}
		{#if type === 'blog'}
			<a class="wrapper" href="/blog/{file.slug}">
				<div class="post">
					<h2 class="title">{file.title ?? file.slug}</h2>
					<p>By <a target="_blank" rel="external" href={file.link ?? 'https://twitter.com/RespDev'}>{file.author ?? 'Responsive'}</a> (<i title={dayjs(file.date).format('LLL') ?? 'Unknown Date'}>{dayjs(file.date).fromNow() ?? 'No Date'}</i>)</p>
					<p>"{file.description ?? ''}"</p>
				</div>
			</a>
		{:else if type === 'updates'}
			<a class="wrapper" href="{file.link}">
				<div class="post">
					<h2 class="title">{file.title?? ''}</h2>
					{#if file.title}
						<p>{file.description ?? ''}</p>
						{:else}
						<p><b>{file.description ?? ''}</b></p>
					{/if}
					<p>
						<i title={dayjs(file.date).format('LLL') ?? 'Unknown Date'}>{dayjs(file.date).fromNow() ?? 'No Date'}</i><br>
						{#if file.link}
							<a href="{file.link}">Read More</a>
						{/if}
					</p>
				</div>
			</a>
		{/if}
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

	h2 {
		margin: 0;
		font-size: 1.6rem;
	}
</style>