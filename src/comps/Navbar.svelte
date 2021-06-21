<script>
	import Button from './Button.svelte';
	let scrollY = 0;
	let innerWidth = 600;
	$: top = scrollY < 70 ? '' : 'background';

	let expand = false;
	let mobile = false;
	$: mobile = innerWidth < 400;
</script>

<svelte:window bind:scrollY bind:innerWidth />

<div class="navbar {top}" id="navbar" class:expand={expand}>
	<div class="navbar-background" />
	{#if mobile}
	<img src="/images/burger.svg" alt="hamburger" on:click={()=>expand=!expand}>
	{/if}
	<div class="buttons">
		<Button click={()=>expand=false} inverted={mobile} href="/">Home</Button>
		<Button click={()=>expand=false} inverted={mobile} href="/podcast">Podcast</Button>
		<Button click={()=>expand=false} inverted={mobile} href="/events">Events</Button>
		<Button click={()=>expand=false} inverted={mobile} href="/blog">Blog</Button>
		<Button click={()=>expand=false} inverted={mobile} href="/discord">Discord</Button>
		<Button click={()=>expand=false} inverted={mobile} href="https://fridgesales.info" external={true} blank={true}>Fridge</Button>
	</div>
</div>

<style>
	div.navbar {
		position: fixed;
		z-index: 1;
		margin-bottom: -4vh;
		width: 100vw;
		text-align: center;
		font-size: 1.2rem;
		/* clip: rect(0, 91vw, 10vh, 9vw); */
	}
	.navbar-background {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		background: linear-gradient(20deg, #5e0e34, #a51333);
		box-shadow: 0 0 9px 0 #000000bb;
		opacity: 0;
		transition: 200ms ease-out;
	}
	.navbar.background .navbar-background {
		opacity: 1;
		transform: translateX(0);
	}
	
	.buttons {
		display: flex;
		align-items: center;
		flex-direction: row;
		padding: 1vh 9vw;
		overflow-x: auto;
	}

	img {
		width: 3rem;
		height: 3rem;
		transition: 100ms ease-out;
		display: block;
		margin: 1rem 1rem;
	}
	.expand img {
		transform: rotate(90deg);
	}

	@media (max-width: 400px) {
		.navbar {
			border-radius: 0 0 10px 0;
		}
		.navbar.expand {
			background-color: var(--secondary-color);
			box-shadow: 0 0 0 200vh #0006;
			width: max-content;
		}

		.navbar.background .navbar-background {
			opacity: 0;
		}

		.buttons {
			flex-direction: column;
			align-items: flex-start;
			width: max-content;
			max-height: 0;
			opacity: 0;
			transition: 100ms ease-out;
			padding: 0;
			padding-right: 1rem;
			padding-bottom: 1rem;
		}
		.expand .buttons {
			max-height: max-content;
			opacity: 1;
		}
	}
</style>
