/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface PlaceState {
  prefecture: string;
}

const initialState: PlaceState = {
  prefecture: 'tokyo',
};

export const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setPlace: (state, action: PayloadAction<string>) => {
      state.prefecture = action.payload;
    },
  },
});

export const { setPlace } = placeSlice.actions;

export const selectPlace = (state: RootState): string => state.place.prefecture;
