<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import Button from './Button.svelte';

	import {onMount} from 'svelte'

	export let cards = [];

	let first = true;
	let element;
	let intersecting;

	$: check = () => {
		if (first && intersecting) {
			first = false;
			return true;
		} else if (first && !intersecting) {
			return false;
		} else {
			return true;
		}
	};

	onMount(() => {
		const cards = element.querySelectorAll('.card');
		cards.forEach((el, i) => {
			el.style.transitionDelay = `${i*300}ms`;
		});
  });
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.3}>
	<div class="cards" bind:this={element}>
		{#each cards as card, i}
			<div class={'card ' + (check() && 'show')}>
				<a href={card.href}><h1>{card.title}</h1></a>
				<p>{@html card.description}</p>
				<div style="display: flex; flex: 1; margin-top: 1.3rem">
					<Button {...card.button} style="margin-top: auto; font-size: 1.4rem;" />
				</div>
			</div>
		{/each}
	</div>
</IntersectionObserver>

<style>
	.cards {
		display: flex;
		flex-flow: row wrap;
		padding: 2vh 10vw;
		justify-content: space-around;
		font-size: 1.2rem;
	}
	.card {
		min-width: 300px;
		max-width: 30vw;
		display: flex;
		flex-direction: column;
		justify-content: cneter;
		align-items: center;
		background-color: var(--tertiary-color);
		color: var(--primary-text);
		flex: 1;
		border-radius: 10px;
		padding: 1rem;
		margin: 1rem 2vw;
		text-align: center;
		transition: opacity 400ms ease-out, transform 400ms ease-out;
		opacity: 0;
		transform: translateX(-100px);
	}
	.card.show {
		opacity: 1;
		transform: translateX(0);
	}
	h1 {
		margin-bottom: 1rem;
		text-align: center;
	}
</style>
