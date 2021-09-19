import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import resultReducer from '../features/result/resultSlice'

export const store = configureStore({
  reducer: {
    result: resultReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
