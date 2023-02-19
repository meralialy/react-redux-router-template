import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
	reducerPath: "catApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://catfact.ninja",
		prepareHeaders: (headers) => {
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getFact: builder.query({
			query: () => "/fact",
		}),
	}),
});

export default api;
