/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { DetailsData } from '../../shared/types';
import type { RootState } from '../store';

const detailSlice = createSlice({
  name: 'details',
  initialState: {
    data: {},
  },
  reducers: {
    setDetails: (state, { payload }: PayloadAction<DetailsData>) => {
      state.data = payload;
    },
  },
});

export const { setDetails } = detailSlice.actions;
export default detailSlice.reducer;
export const selectDetails = (state: RootState) => state.details.data;
