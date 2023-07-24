import { apiSlice } from "./apiSlice";

const USER_API_URL = "/api/auth";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    magiclogin: builder.mutation({
        query: (credentials) => ({
            url: `${USER_API_URL}/magiclogin`,
            method: "POST",
            body: credentials,
        }),
    }),
  }),
});

export const { useMagicloginMutation } = userApiSlice;
