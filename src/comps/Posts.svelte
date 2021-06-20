<script>
	export let files;
</script>

<div class="posts">
	{#each files as file}
		<a class="post" href="/blog/{file.path.slice(0, -3)}">
			<h2 class="title">{file.title ?? file.path}</h2>
			<p class="date">{file.date || ''}</p>
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
		margin: 1rem 0;
		text-decoration: none;
		transition: 150ms ease-out;
	}
	.post:hover {
		box-shadow: 0 4px 20px #00000044;
		transform: scale(1.1);
	}

	h2 {
		margin: 0;
		font-size: 1.6rem;
	}

	.date {
		color: var(--secondary-text);
	}
</style>