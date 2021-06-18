<script>
	import Button from './Button.svelte';
	export let title = '', 
	description = '',
	button = {};

	let innerWidth;
	let height;
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
	margin-top: -4vh;
	width: 100%;
	background-color: #141414;
	overflow: hidden;
}

div.background div {
	display: block;
	background: center no-repeat url('/banner.png');
	background-size: contain;
	width: 100%;
	height: 100%;
	filter: brightness(0.6) blur(10px);
}
div.background.mobile div {
	background: center no-repeat url('/fav.png');
}
</style>

<div class="header" id="header" bind:clientHeight={height}>
	<div class="background {innerWidth <= 400 ? 'mobile' : ''}" style="height: {height}px">
		<div></div>
	</div>
	<h1>{title}</h1>
	<p><slot>{description}</slot></p>
	<Button {...button} blank="true">{button.title}</Button>
</div>