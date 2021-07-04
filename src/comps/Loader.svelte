<script>
	import { fade, slide } from 'svelte/transition';

	export let bool = false;
</script>

{#if bool}
<div transition:slide={{duration: 500}}>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" transition:fade={{duration: 500}}>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#323232"/>
			<path d="M8 0C3.58172 0 0 3.58172 0 8C0 8.55229 0.447715 9 1 9C1.55228 9 2 8.55229 2 8C2 4.68629 4.68629 2 8 2C8.55229 2 9 1.55228 9 1C9 0.447715 8.55229 0 8 0Z" fill="#EC2B55"/>
		</svg>
	</div>
{/if}

<style>
	@keyframes spin {
		0% {
			transform: rotate(90deg);
		}
		100% {
			transform: rotate(810deg);
		}
	}

	svg {
		animation: spin 1.7s cubic-bezier(.34,.27,.35,.67) infinite;
		width: 4rem;
		height: 4rem;
		margin-left: 8.5ch;
	}
</style>