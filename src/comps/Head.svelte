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

	<script defer>if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"Vandesm14`",utcoffset:"-4"}))};sessionStorage.setItem("_swa","1");</script>
</svelte:head>
