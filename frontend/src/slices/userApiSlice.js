import { apiSlice } from "./apiSlice";

const USER_API_URL = "/api/auth";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    magiclogin: builder.mutation({
        query: (token) => ({
            url: `${USER_API_URL}/magiclogin/callback`,
            method: "GET",
            params: { token: token }
        }),
    }),
  }),
});

export const { useMagicloginMutation } = userApiSlice;
