import { Context, Next } from "koa";

import { AuthError } from "@common/utils/errors/public";
import { messages } from "@common/constants/messages";
import { CookieComponent } from "@common/components/cookie.component";
import { TokenComponent } from "@common/components/token.component";

export const tokenMiddleware = async (ctx: Context, next: Next) => {
	const token = CookieComponent.getToken(ctx);

	if (!token) {
		throw new AuthError({ message: messages.auth.error.unauthorized });
	}

	const payload = TokenComponent.verify(token);

	ctx.user = {
		token,
		payload,
	};

	await next();
};
