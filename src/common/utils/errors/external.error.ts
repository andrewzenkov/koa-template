import { codeStatuses } from "@common/constants/codeStatuses.constant";
import { messages } from "@common/constants/messages";

import { IError } from "./types";

export class ExternalError implements IError {
	public isInternal: boolean;
	public isCustom: boolean;
	public message: string;
	public status: number;

	constructor({ message = messages.base.error.base, status = codeStatuses.serverError } = {}) {
		this.isInternal = false;
		this.isCustom = true;

		this.message = message;
		this.status = status;
	}
}
