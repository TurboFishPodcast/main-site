<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import Button from './Button.svelte';
	export let title = '',
		description = '',
		button = {};
</script>

<div class='article'>
	<h1>{title}</h1>
	<p><slot>{description}</slot></p>
	<Button {...button}>{button.title}</Button>
</div>

<style>
	div {
		display: flex;
		align-items: right;
		flex-direction: column;
		justify-content: center;
		padding: 0 10vw;
		padding-bottom: 1vh;
		background-color: var(--secondary-color);
		color: var(--primary-text);
		font-size: 1.2rem;
	}
	div > * {
		margin: 30px 0;
	}
	div > *:empty {
		display: none;
	}
	h1 {
		margin-bottom: 0;
	}
	p {
		line-height: 2.2rem;
	}
</style>
