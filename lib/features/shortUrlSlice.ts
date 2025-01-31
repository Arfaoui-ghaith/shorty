import { apiSlice } from "./api";

const SHORTURL_URL = "/short-url";

export const shortUrlApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addShortUrl: builder.mutation({
      query: (data) => ({
        url: `${SHORTURL_URL}/shorten`,
        method: "post",
        body: data.payload,
      }),
    }),
  }),
});

export const { useAddShortUrlMutation } = shortUrlApiSlice;
