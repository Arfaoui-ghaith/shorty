import { apiSlice } from "./api";

export const shortUrlApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addShortUrl: builder.mutation({
      query: (data) => ({
        url: `/shorten`,
        method: "post",
        body: data.payload,
      }),
    }),
  }),
});

export const { useAddShortUrlMutation } = shortUrlApiSlice;
