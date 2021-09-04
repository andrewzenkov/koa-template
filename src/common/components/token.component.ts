import jwt from "jsonwebtoken";

import { config } from "@config";

export class TokenComponent {
	static secret = config.jwt.secret;

	static verify(token: string) {
		return jwt.verify(token, TokenComponent.secret);
	}

	static generate(_payload: object) {
		const accessToken = jwt.sign(_payload, TokenComponent.secret, {
			algorithm: config.jwt.algorithm as jwt.Algorithm,
			expiresIn: config.jwt.expiresIn,
		});

		return accessToken;
	}
}
