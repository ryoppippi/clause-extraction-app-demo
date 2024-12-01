<script lang='ts'>
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	const { data } = $props();

</script>

{data.id}

{#await data.result}
	<p>Loading...</p>
{:then result}
	<Markdown md={result} plugins={[gfmPlugin()]} />
{:catch error}
	<p>{error.message}</p>
{/await}
