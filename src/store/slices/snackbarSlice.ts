import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import DbService from "../../services/dbService";
import { IUser } from "../../types/userType";

interface ISnackbar {
  msg: string;
  type: "error" | "success";
  toShow: boolean;
}

const initialState: ISnackbar = { msg: "", toShow: false, type: "success" };

export const userSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar(state, action: PayloadAction<ISnackbar>) {
      return action.payload;
    },
    hideSnackbar(state, action: PayloadAction) {
      return initialState;
    },
  },
});
export const { showSnackbar, hideSnackbar } = userSlice.actions;

export default userSlice.reducer;
