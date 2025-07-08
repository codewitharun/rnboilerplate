import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateUserResponse } from "@src/redux/api/types/userTypes";

interface UserState {
  token: string | null;
  user: CreateUserResponse | null;
  role: null | string;
}

const initialState: UserState = {
  token: "",
  role: null,
  user: {} as CreateUserResponse,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials: { email: string; password: string }, { dispatch }) => {
    try {
      if (credentials.email) {
        await AsyncStorage.setItem("token", credentials.email);
        return credentials.email; // Return the token (email in this case) directly
      }
    } catch (error) {
      throw error;
    }
  }
);

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    updateUser: (state, action: PayloadAction<CreateUserResponse>) => {
      state.user = action.payload;
    },
    updateUserRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      }
    );
  },
});

export const { updateToken, updateUser, updateUserRole } = loginSlice.actions;

export default loginSlice.reducer;
