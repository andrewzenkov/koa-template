import "module-alias/register";
import "reflect-metadata";

import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import { createConnection } from "typeorm";

import { errorMiddleware } from "@common/middleware/error.middleware";

import { authRoute } from "./routes";
import { config } from "./config";

function connectMidldeware(app: Koa) {
	app.use(bodyParser());
	app.use(errorMiddleware);
}

function connectRoutes(app: Koa) {
	const router = new Router().prefix("/api");

	app.use(authRoute.routes());
}

async function connectToDb() {
	await createConnection({
		type: "postgres",
		host: config.database.host,
		port: config.database.port,
		username: config.database.username,
		password: config.database.password,
		database: config.database.database,
		entities: [],
		synchronize: config.database.synchronize,
		logging: config.database.logging,
	});
}

function listen(app: Koa) {
	app.listen(config.base.port, () => {
		console.log(`Sever has started. Port: ${config.base.port}`);
	});
}

(async () => {
	const app = new Koa();

	await connectMidldeware(app);
	await connectRoutes(app);
	await connectToDb();
	await listen(app);
})();
