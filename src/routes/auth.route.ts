import { Context } from "koa";
import Router from "koa-router";

export const authRoute = new Router().prefix("/auth");

authRoute.post("/sign-in", (ctx: Context) => {});
authRoute.post("/sign-up", (ctx: Context) => {});


