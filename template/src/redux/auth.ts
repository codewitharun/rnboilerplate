import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
  user: Record<string, unknown>;
}

const initialState: UserState = {
  token: '',
  user: {},
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: {email: string; password: string}, {dispatch}) => {
    try {
      if (credentials.email) {
        await AsyncStorage.setItem('token', credentials.email);
        return credentials.email; // Return the token (email in this case) directly
      }
    } catch (error) {
      throw error;
    }
  },
);

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      },
    );
  },
});

export const {updateToken} = loginSlice.actions;

export default loginSlice.reducer;
