<script lang='ts'>
	import { superForm } from 'sveltekit-superforms';

	const { data } = $props();

	const { enhance, errors, message } = superForm(data.form, {
	});
</script>

<div class='hero bg-base-200 min-h-screen'>
	<div class='hero-content text-center'>
		<div class='max-w-md'>
			<h1 class='text-5xl font-bold'>Clause Extraction Web-app Demo!</h1>
			<p class='py-6'>
				Upload a PDF file to extract legal clauses from it.
			</p>
			<div class='flex items-center justify-center gap-y-5'>
				<form class='flex flex-col' enctype='multipart/form-data' method='POST' use:enhance>
					<input
						name='pdf'
						class='file-input w-full max-w-xs'
						accept='application/pdf'
						type='file'
					/>
					{#if $errors.pdf}<span>{$errors.pdf}</span>{/if}
					<button class='btn btn-primary' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	</div>
</div>

<p>{$message}</p>
