import bcrypt from "bcrypt";

export class PasswordComponent {
	public static async hash(password: string) {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		return hash;
	}

	public static async compare(password: string, hashedPassword: string) {
		const match = await bcrypt.compare(password, hashedPassword);

		return match;
	}
}
