import { apiSlice } from '../api/apiSlice';

export const useDetailsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDetails: builder.query({
      query: (id: number) => `/friends/${id}`,
    }),
  }),
});

export const { useLazyGetDetailsQuery } = useDetailsSlice;
