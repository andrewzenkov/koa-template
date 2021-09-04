export const config = {
	base: {
		port: process.env.APPLICATION_PORT,
	},

	database: {
		type: "postgres",
		host: process.env.DB_HOST || "localhost",
		port: Number(process.env.DB_PORT) || 5432,
		username: process.env.DB_USERNAME || "postgres",
		password: process.env.DB_PASSWORD || "postgres",
		database: process.env.DB_DATABASE_NAME || "postgres",
		synchronize: true,
		logging: false,
	},

	jwt: {
		secret: process.env.JWT_SECRET || "2131",
		expiresIn: process.env.JWT_TOKEN_LIFE || "24h",
		algorithm: "HS256",
	},

	crypto: {
		algorithm: "HS256",
		salt: "salt",
		iterations: 10,
	},
};
