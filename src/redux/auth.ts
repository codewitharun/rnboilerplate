import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
});

export const { updateToken, updateUser, updateUserRole } = loginSlice.actions;

export default loginSlice.reducer;
