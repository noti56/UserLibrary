import { configureStore } from "@reduxjs/toolkit";
import snackbarSlice from "./slices/snackbarSlice";
// import languageReducer from './slices/languageSlice';
// import layoutSlice from './slices/layoutSlice';
// import missingsLowsItems from './slices/missingsLowsItemsSlice';
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
