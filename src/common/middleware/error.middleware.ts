import { Context, Next } from "koa";

import { ExternalError, InternalError } from "@common/utils";
import { IError } from "@common/utils/errors/types";

export const errorMiddleware = async (ctx: Context, next: Next) => {
	try {
		await next();
	} catch (err) {
        const error = err as IError

		let publicError = new ExternalError({
			status: error.status,
			message: error.message,
		});
		let internalError = null;

		if (error instanceof Error) {
			internalError = new InternalError({
                message: error.message,
                stack: error.stack,
                name: error.name,
            });

			publicError = new ExternalError({
				message: error.message,
				status: error.status,
			});
		}

		if (internalError) {
			console.log("internalError", internalError);
		}

		ctx.status = publicError.status;
		ctx.body = {
			message: publicError.message,
		};
	}
};