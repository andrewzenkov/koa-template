import jwt from "jsonwebtoken";
import { Context, Next } from "koa";

import { config } from "@config";

export class CookieComponent {
	static secret = config.jwt.secret;
	static cookieField = "jwt";

    static getToken(ctx: Context) {
		return ctx.cookies.get(CookieComponent.cookieField) || null;
	}
	
	static setToken(ctx: Context, token: string) {
		ctx.cookies.set(CookieComponent.cookieField);
	}
}
