import { configureStore } from "@reduxjs/toolkit";
// import languageReducer from './slices/languageSlice';
// import layoutSlice from './slices/layoutSlice';
// import missingsLowsItems from './slices/missingsLowsItemsSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
