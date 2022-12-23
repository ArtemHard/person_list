import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import personsSlice from "./reducers/personsSlice";
// ...

export const store = configureStore({
  reducer: {
    persons: personsSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
