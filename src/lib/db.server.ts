import fs from 'node:fs/promises';
import { toUint8Array } from 'uint8array-extras';

/**
 * dummy db class
 * - save File object to local fs storage
 * - load File object from local fs storage
 */
export class DB {
	constructor() { }

	async save(name: string, file: File): Promise<void> {
		const ab = await file.arrayBuffer();

		await fs.writeFile(name, toUint8Array(ab));
	}

	async load(name: string): Promise<File> {
		const data = await fs.readFile(name);

		return new File([data.buffer], name);
	}
}
