<script>
	import Button from './Button.svelte';
	let scrollY;
	$: top = scrollY === 0 ? '' : 'background';
</script>

<svelte:window bind:scrollY></svelte:window>

<style>
div.navbar {
  position: fixed;
  z-index: 1;
  display: flex;
  overflow-x: auto;
  align-items: center;
  flex-direction: row;
  margin-bottom: -4vh;
  padding: 1vh 1vw;
  max-width: 100vw;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  transition: 200ms ease-out;
}
.navbar.color {
  background-color: var(--primary-color);
}
.navbar .navbar-background {
  position: absolute;
  z-index: -1;
  margin-left: -1vw;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  box-shadow: 0 0 9px 0 #000000bb;
  opacity: 0;
  transition: 200ms ease-out;
  transform: translateX(-100vw);
}
.navbar.background .navbar-background {
  opacity: 1;
  transform: translateX(0);
}
</style>

<div class="navbar {top}" id="navbar">
	<div class="navbar-background"></div>
	<!-- <a href="/"><img src="/fav.png" alt="Logo"></a> -->
	<Button href="/">Home</Button>
	<Button href="/podcast">Podcast</Button>
	<Button href="/events">Events</Button>
	<Button href="/newsletter">Newsletter</Button>
</div>