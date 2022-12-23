import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Users } from "./types/personsTypes";

// Define the initial state using that type
const initialState: Users = [];

export const counterSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<Users>) => {
      return (state = action.payload);
    },
  },
});

export const { addUsers } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.persons;

export default counterSlice.reducer;
