import { apiSlice } from "./apiSlice";

const ADMIN_API_URL = "/api/auth";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: `${ADMIN_API_URL}/login`,
                method: "POST",
                body: credentials,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${ADMIN_API_URL}/logout`,
                method: "POST",
            })
        }),
    })
});

export const { useLoginMutation, useRegisterMutation } = adminApiSlice;