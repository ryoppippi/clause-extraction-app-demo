<script lang='ts'>
	import { superForm } from 'sveltekit-superforms';

	const { data } = $props();

	const { enhance, errors, message } = superForm(data.form, {
	});
</script>

<form enctype='multipart/form-data' method='POST' use:enhance>
	<input
		name='pdf'
		accept='application/pdf'
		type='file'
	/>
	{#if $errors.pdf}<span>{$errors.pdf}</span>{/if}
	<button type='submit'>
		Submit
	</button>
</form>

<p>{$message}</p>
