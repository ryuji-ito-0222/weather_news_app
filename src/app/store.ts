import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { placeSlice } from 'features/placeSlice';

export const store = configureStore({
  reducer: {
    place: placeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
