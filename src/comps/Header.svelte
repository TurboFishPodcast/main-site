<script>
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

<div class="header {$$slots.default ? 'content' : ''}">
	<div class="text">
		<slot>
			{innerWidth <= 400 ? 'Resp' : 'Responsive'}
		</slot>
	</div>
</div>

<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
	rel="stylesheet"
/>

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'); */

	div.header {
		position: relative;
		margin: 0 auto;
		font-size: 4rem;
		font-family: Montserrat, sans-serif;
		width: 82vw;
		padding-top: 9vh;
		min-height: 30vh;
		margin-bottom: 1rem;
		background: linear-gradient(to right top, #420c35, #a51333);
	}

	div.text {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
	}

	@media (max-width: 400px) {
		div.header {
			font-size: 5rem;
		}
		div.header.content {
			font-size: 3rem;
		}
	}
</style>
