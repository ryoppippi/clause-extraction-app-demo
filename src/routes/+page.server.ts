// NOTE: Import fail from Superforms, not from @sveltejs/kit!
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
	pdf: z
		.instanceof(File, { message: 'Please upload a file.' }),
});

export async function load() {
	return {
		form: await superValidate(zod(schema)),
	};
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const pdf = form.data.pdf;

		return message(form, 'You have uploaded a valid file!');
	},
};