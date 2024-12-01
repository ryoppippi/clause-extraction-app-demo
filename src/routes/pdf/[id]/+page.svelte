<script lang='ts'>
	import { page } from '$app/stores';
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	import Spinner from './Spinner.svelte';

	const { data } = $props();

	const pdfUrl = $derived(`${$page.url.origin}/api/pdf/${data.id}`);

	let innerHeight = $state(1000);
	let innerWidth = $state(1000);
</script>

<div class='flex gap-x-5'>
	<div class='flex justify-center items-center min-w-96'>
		{#await data.result}
			<Spinner />
		{:then result}
			<article class='prose lg:prose-xl h-lvh'>
				<Markdown md={result} plugins={[gfmPlugin()]} />
			</article>
		{:catch error}
			<p>{error.message}</p>
		{/await}</div>
	<div>
		<div>
			<!-- svelte-ignore a11y_missing_attribute -->
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<iframe height={innerHeight} src={pdfUrl} width={innerWidth / 2} /></div>
	</div>
</div>

<svelte:window bind:innerWidth bind:innerHeight />
