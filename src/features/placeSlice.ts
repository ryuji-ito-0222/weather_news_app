/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface PlaceState {
  place: string;
}

const initialState: PlaceState = {
  place: 'tokyo',
};

export const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setPlace: (state, action: PayloadAction<string>) => {
      state.place = action.payload;
    },
  },
});

export const { setPlace } = placeSlice.actions;

export const selectPlace = (state: RootState): string => state.place.place;
