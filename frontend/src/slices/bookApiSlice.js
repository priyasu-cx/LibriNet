import {apiSlice} from "./apiSlice";

const BOOK_API_URL = "/api/books";

export const bookApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.mutation({
            query: () => ({
                url: `${BOOK_API_URL}`,
                method: "GET",
            }),
        }),
    }),
});

export const {useGetBooksMutation} = bookApiSlice;