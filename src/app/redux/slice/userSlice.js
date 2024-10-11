import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [],
}
export const userSlice = createSlice({
  name: "usersInfo",
  initialState,

  reducers: {
    setUserInfo: (state, action) => {
      state.usersList = action.payload;
      },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
