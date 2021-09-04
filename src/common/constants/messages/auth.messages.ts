const success = {};

const error = {
	base: "Auth error.",
	emailExists: `The email is already exists.`,
	emailDoesntExists: `The email does not exist.`,
	wrongPassword: `Wrong password.`,
	unauthorized: `Token expired.`,
};

export const auth = {
	success,
	error,
};
