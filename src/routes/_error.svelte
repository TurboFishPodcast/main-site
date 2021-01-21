<script>
  export let status, error;
</script>

<svelte:head>
    <title>Responsive - {status}</title>
</svelte:head>

<h1>{error} | {JSON.stringify(error)} | {status}</h1>