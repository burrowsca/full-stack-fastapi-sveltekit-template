import { loginAccessToken, OpenAPI } from "../../client";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get("username");
		const password = data.get("password");

		const response = await loginAccessToken({
			formData: { username, password },
		});
		console.log("response", response);
	},
};
