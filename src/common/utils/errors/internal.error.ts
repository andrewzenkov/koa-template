import { IError } from "./types";

export class InternalError implements IError {
	public isInternal: boolean;
	public isCustom: boolean;
	public message: string;
	public stack: any;

	constructor(err = new Error()) {
		this.isInternal = true;
		this.isCustom = true;

		this.message = err.message;
		this.stack = err.stack;
	}
}
