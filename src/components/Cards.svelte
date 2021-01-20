<script>
	import IntersectionObserver from "svelte-intersection-observer";
	import Button from './Button.svelte';
	
	export let cards = [];
	let entry = {};
	let element;
	let first = true;
	$: inView = entry.isIntersecting;
	$: check = () => {
		if (first && inView) {
			first = false;
			return 'xyz-in';
		} else if (first && !inView) {
			return 'hidden';
		} else {
			return 'xyz-in';
		}
	}
</script>

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
	background-color: var(--primary-text);
	color: var(--secondary-color);
	flex: 1;
	border-radius: 10px;
	padding: 1rem;
	margin: 1rem 2vw;
}
.card.hidden {
	opacity: 0;
}
h1 {
	margin-bottom: 1rem;
	text-align: center;
}
</style>

<IntersectionObserver {element} threshold="0.3" bind:entry>
	<div class="cards" xyz="fade left-100 duration-6 stagger-3" bind:this={element}>
		{#each cards as card}
		<div class={'card ' + check()}>
			<a href={card.href}><h1>{card.title}</h1></a>
			<p>{@html card.description}</p>
			<div style="display: flex; flex: 1; margin-top: 1.3rem">
				<Button {...card.button} style="margin-top: auto; font-size: 1.4rem;"></Button>
			</div>
		</div>
		{/each}
	</div>
</IntersectionObserver>