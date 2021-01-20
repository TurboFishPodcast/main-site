<script>
	import IntersectionObserver from "svelte-intersection-observer";
	import Button from './Button.svelte';
	export let title = '', 
	description = '',
	button = {};
	let entry = {};
	let element;
	let innerWidth;
</script>

<svelte:window bind:innerWidth></svelte:window>

<style>
div.header {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
	padding: 4vh 10vw;
	padding-top: calc(6vh + 1.2rem);
	/* background-color: var(--primary-color); */
	color: var(--primary-text);
  text-align: center;
	font-size: 1.6rem;
}
div > * {
  margin: 30px 0;
}
div > *:empty {
  display: none;
}
p {
	line-height: 2.2rem;
}
div.background {
	display: block;
	position: absolute;
  z-index: -1;
	width: 100%;
	height: 100%;
	background: center no-repeat url('/banner.png');
	background-size: contain;
	filter: blur(10px) brightness(0.6);
}
div.background.mobile {
	background: center no-repeat url('/fav.png');
}
</style>

<IntersectionObserver {element} threshold="0" bind:entry>
	<div class="header" bind:this={element}>
		<div class="background {innerWidth <= 400 ? 'mobile' : ''}"></div>
		<h1>{title}</h1>
		<p><slot>{description}</slot></p>
		<Button {...button}>{button.title}</Button>
	</div>
</IntersectionObserver>