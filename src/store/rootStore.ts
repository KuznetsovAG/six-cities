import { configureStore } from '@reduxjs/toolkit';
import mainPageSlice from '../pages/main-page/main-page-slice/main-page-slice';

export const store = configureStore({
  reducer: {
    mainPage: mainPageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
