import { apiSlice } from "./apiSlice";

const ADMIN_API_URL = "/admin/api/auth";

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
                method: "GET",
            })
        }),
        addBook: builder.mutation({
            query: (book) => ({
                url: `${ADMIN_API_URL}/book/add`,
                method: "POST",
                body: book,
            }),
        }),
        updateBook: builder.mutation({
            query: (book) => ({
                url: `${ADMIN_API_URL}/book`,
                method: "PUT",
                body: book,
            })
        }),
        deleteBook: builder.mutation({
            query: (bookno) => ({
                url: `${ADMIN_API_URL}/book/${bookno}`,
                method: "DELETE",                
            })
        })
    })
});

export const { useLoginMutation, useLogoutMutation, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } = adminApiSlice;