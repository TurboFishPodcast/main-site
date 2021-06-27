<script>
	export let title = '',
		description = '';
</script>

<svelte:head>
	<meta name="author" content="Shane & Leon" />
	<meta
		name="keywords"
		content="responsive, respdev, development, coding, community, discord, podcast"
	/>
	
	<title>{title}</title>
	
	<!-- Primary Meta Tags -->
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="theme-color" content="#991133" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://respdev.com" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://respdev.com/banner.png?v=2" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://respdev.com" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content="https://respdev.com/banner.png?v=2" />

	<!-- Default Statcounter code for Responsive
	https://respdev.com -->
	<script type="text/javascript">
	var sc_project=12557008; 
	var sc_invisible=1; 
	var sc_security="f17326f0"; 
	</script>
	<script type="text/javascript"
	src="https://www.statcounter.com/counter/counter.js"
	async></script>
	<noscript><div class="statcounter"><a title="Web Analytics"
	href="https://statcounter.com/" target="_blank"><img
	class="statcounter"
	src="https://c.statcounter.com/12557008/0/f17326f0/1/"
	alt="Web Analytics"></a></div></noscript>
	<!-- End of Statcounter Code -->
</svelte:head>
