import type { PageServerLoad } from './$types';
import { GEMINI_API_KEY } from '$env/static/private';
import { db } from '$lib/db.server.js';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

const google = createGoogleGenerativeAI({
	apiKey: GEMINI_API_KEY,
});

async function extractInfoFromPDF(id: string) {
	const pdf = await db.load(`pdfs/${id}.pdf`);

	// TODO: use json mode and validate with zod or typia
	const result = await generateText({
		model: google('gemini-1.5-flash'),
		messages: [
			{
				role: 'user',
				content: [
					{
						type: 'text',
						text: 'Extract the legal clauses related to Indemnification, Termination, and Liability from the uploaded PDF. Identify and return the specific sections containing these clauses in a structured format, preserving the context of each clause. If no relevant clause is found, state that explicitly. Ensure accuracy and clarity in recognising and categorising these legal terms.',
					},
					{
						type: 'text',
						text: 'output should be in markdown format',
					},
					{
						type: 'file',
						data: await pdf.arrayBuffer(),
						mimeType: 'application/pdf',
					},
				],
			},
		],
	});
	return result.text;
};
export const load: PageServerLoad = async ({ params }) => {
	const { id } = params;

	const result = extractInfoFromPDF(id).then((result) => {
		return result;
	});

	return {
		id,
		result,
	};
};
