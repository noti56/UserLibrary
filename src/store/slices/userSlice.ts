import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import DbService from "../../services/dbService";
import { IUser } from "../../types/userType";

const initialState: IUser[] = [];

export const fetchAllUsers = createAsyncThunk("users/fetchAllUsers", async (thunkAPI) => {
  const response = await DbService.getUsers();

  return response.users;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    editUser(state, action: PayloadAction<IUser>) {
      const stateCopy: IUser[] = JSON.parse(JSON.stringify(state));
      const userArrayIndex: number = stateCopy.findIndex((user) => user.id == action.payload.id);
      stateCopy[userArrayIndex] = action.payload;
      return stateCopy;
    },
    addUser(state, action: PayloadAction<IUser>) {
      const stateCopy: IUser[] = JSON.parse(JSON.stringify(state));
      stateCopy.push(action.payload);
      return stateCopy;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});
export const { editUser, addUser } = userSlice.actions;

export default userSlice.reducer;
