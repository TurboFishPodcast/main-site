<script>
	import {onMount, afterUpdate} from 'svelte';

	let innerWidth;
	let height = 0;
	let header;

	afterUpdate(() => header.style.paddingBottom = `calc(${height}px + 1rem)`);
</script>

<svelte:window bind:innerWidth />

<div class="header {$$slots.default ? 'content' : ''}" bind:this={header}>
	<div class="text" bind:offsetHeight={height}>
		<slot>
			Responsive
		</slot>
	</div>
</div>

<style>
	@font-face {
    font-family: 'Montserrat';
    src: url('Montserrat-Bold.ttf') format('truetype');
	}

	div.header {
		position: relative;
		margin: 0 auto;
		font-size: 4rem;
		font-family: Montserrat, sans-serif;
		width: 100%;
		padding-top: 9vh;
		min-height: 30vh;
		margin-bottom: 1rem;
		background: linear-gradient(to right top, #420c35, #a51333);
	}

	div.text {
		position: absolute;
		bottom: 1rem;
		left: calc(10vw);
		width: 82vw;
		margin: 0 auto;
	}

	@media (max-width: 400px) {
		div.header {
			font-size: 3rem;
			min-height: 0;
			padding-bottom: 5rem;
		}
		div.header.content {
			font-size: 3rem;
			padding-bottom: 10rem;
		}
	}
</style>
