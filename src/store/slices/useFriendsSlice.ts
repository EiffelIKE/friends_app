import { apiSlice } from '../api/apiSlice';

export const useFriendsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => '/friends',
    }),
  }),
});

export const { useLazyGetFriendsQuery } = useFriendsSlice;
