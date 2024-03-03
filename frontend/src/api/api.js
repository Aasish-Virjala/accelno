import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_API}/api/v1`,
	credentials: 'include',
});

export const api = createApi({
	baseQuery: baseQuery,
	endpoints: (builder) => ({}),
});
