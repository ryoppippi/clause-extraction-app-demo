<script lang='ts'>
	import { page } from '$app/stores';
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	const { data } = $props();

	const pdfUrl = $derived(`${$page.url.origin}/api/pdf/${data.id}`);

</script>

<iframe height='1000' src={pdfUrl} width='500' />

{#await data.result}
	<p>Loading...</p>
{:then result}
	<Markdown md={result} plugins={[gfmPlugin()]} />
{:catch error}
	<p>{error.message}</p>
{/await}
