<script>
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	import localizedFormat from 'dayjs/plugin/localizedFormat.js';
	dayjs.extend(relativeTime);
	dayjs.extend(localizedFormat);

	export let files, modal = false;
	files = files.filter(el => new Date() >= new Date(el.date)); // post date is less than or equal to current date
	files.sort((a, b) => new Date(b.date) - new Date(a.date));

	let display = {};
	let open = false;

	const updateModal = (file, state) => {
		display = file;
		open = state;
	};
</script>

<div class="modal-wrapper {open ? 'open' : ''}" on:click={()=>updateModal(display, false)}>
	<div class="modal">
		<div class="modal-close" on:click={()=>updateModal(display, false)}>X</div>
		<h2 class="title">{display.title ?? display.slug}</h2>
		<p>By <a target="_blank" rel="external" href={display.link ?? 'https://twitter.com/RespDev'}>{display.author ?? 'Responsive'}</a> (<i title={dayjs(display.date).format('LLL') ?? 'Unknown Date'}>{dayjs(display.date).fromNow() ?? 'No Date'}</i>)</p>
		<p>"{display.description ?? ''}"</p>
	</div>
</div>

<div class="posts">
	{#each files as file}
		{#if !modal}
			<a class="wrapper" href="/blog/{file.slug}">
				<div class="post">
					<h2 class="title">{file.title ?? file.slug}</h2>
					<p>By <a target="_blank" rel="external" href={file.link ?? 'https://twitter.com/RespDev'}>{file.author ?? 'Responsive'}</a> (<i title={dayjs(file.date).format('LLL') ?? 'Unknown Date'}>{dayjs(file.date).fromNow() ?? 'No Date'}</i>)</p>
					<p>"{file.description ?? ''}"</p>
				</div>
			</a>
		{:else}
			<div class="post wrapper" on:click={()=>updateModal(file, true)}>
				<h2 class="title">{file.title ?? file.slug}</h2>
				<p>By <a target="_blank" rel="external" href={file.link ?? 'https://twitter.com/RespDev'}>{file.author ?? 'Responsive'}</a> (<i title={dayjs(file.date).format('LLL') ?? 'Unknown Date'}>{dayjs(file.date).fromNow() ?? 'No Date'}</i>)</p>
				<p>"{file.description ?? ''}"</p>
			</div>
		{/if}
	{/each}
</div>

<style>
	.modal-wrapper {
		position: fixed;
		display: grid;
		align-items: center;
		justify-items: center;
		z-index: 99;
		width: 100%;
		height: 100%;
		opacity: 0;
		left: 0;
		top: 0;
		transition: 150ms ease-out;
    pointer-events: none;
	}
	.modal-wrapper.open {
		opacity: 1;
    pointer-events: auto;
	}

	.modal-close {
		position: absolute;
		top: 0.7rem;
		right: 1rem;
		cursor: pointer;
	}

	.modal {
		position: relative;
		min-width: 300px;
		display: flex;
		flex-direction: column;
		background-color: var(--tertiary-color);
		flex: 1;
		border-radius: 10px;
		padding: 0.6rem;
		/* margin: 0.6rem 0; */
		box-shadow: 0 0 0 200vh #0006;
		transition: 150ms ease-out;
	}

	.modal.open {
	}

	.posts {
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		font-size: 1.2rem;
		width: max-content;
		max-width: 100%;
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