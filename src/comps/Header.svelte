<script>
	export let title = '';
	let innerWidth;
</script>

<svelte:window bind:innerWidth></svelte:window>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

div.header {
	position: relative;
  margin: 0 auto;
  font-size: 4rem;
	font-family: Montserrat;
	width: 82vw;
	padding-top: 9vh;
	min-height: 30vh;
	margin-bottom: 1rem;
	background: linear-gradient(to right top, #420C35, #A51333);
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
}
</style>

<div class="header">
	<div class="text">
		{innerWidth <= 400 ? 'Resp' : 'Responsive'}
	</div>
</div>