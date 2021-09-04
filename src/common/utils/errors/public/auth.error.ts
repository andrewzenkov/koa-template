import { codeStatuses } from "@common/constants/codeStatuses.constant";
import { messages } from "@common/constants/messages";

import { ExternalError } from "../external.error";

export class AuthError extends ExternalError {
	constructor(
		{ 
			message = messages.auth.error.base, 
			status = codeStatuses.unauthorized
		} = {
			message: messages.auth.error.base,
			status: codeStatuses.unauthorized,
		}
	) {
		super({ message, status });
	}
}
