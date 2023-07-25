import { apiSlice } from "./apiSlice";

const USER_API_URL = "/api/auth";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    magiclogin: builder.mutation({
      query: (token) => ({
        url: `${USER_API_URL}/magiclogin/callback`,
        method: "GET",
        params: token,
      }),
    }),
    sendemail: builder.mutation({
      query: (credentials) => ({
        url: `${USER_API_URL}/magiclogin`,
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_API_URL}/logout`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useMagicloginMutation,
  useSendemailMutation,
  useLogoutMutation,
} = userApiSlice;
