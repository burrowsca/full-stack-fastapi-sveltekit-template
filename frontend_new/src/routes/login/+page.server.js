import { loginAccessToken, OpenAPI } from "../../client";
import { redirect } from "@sveltejs/kit";

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

		// TODO - handle error response

		// Set the access token in a cookie
		cookies.set("access_token", response.access_token, {
			httpOnly: true,
			sameSite: "lax",
			secure: true,
			path: "/",
		});

		// Redirect to the home page
		return redirect(303, "/");
	},
};
