import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { User } from '../../types'

export interface ResultState {
  user: User
}

const initialState: ResultState = {
  user: {
    username: '',
    avatar: ''
  }
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  },
});

export const { setUser } = resultSlice.actions;

export const userSelector = (state: RootState) => state.result.user;

export default resultSlice.reducer;
