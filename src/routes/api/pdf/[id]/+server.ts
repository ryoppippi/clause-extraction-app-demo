import type { RequestHandler } from './$types';
import { db } from '$lib/db.server';

export const GET = (async ({ params }) => {
	const { id } = params;

	const pdf = await db.load(`pdfs/${id}.pdf`);

	return new Response(pdf);
}) satisfies RequestHandler;
