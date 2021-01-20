<script>
	import IntersectionObserver from "svelte-intersection-observer";
	import Button from './Button.svelte';
	export let title = '', description = '', button = {}, animate = true;
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
.article.hidden {
	opacity: 0;
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

<IntersectionObserver {element} threshold="0.3" bind:entry>
	<div class={`article ${animate && check()}`} xyz={animate && "fade duration-10"} bind:this={element}>
		<h1>{title}</h1>
		<p><slot>{description}</slot></p>
		<Button {...button}>{button.title}</Button>
	</div>
</IntersectionObserver>