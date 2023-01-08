import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { userComment, Users } from "./types/personsTypes";

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
    filtredByCity: (state) => {
      state = state.sort((a, b) => a.address.city > b.address.city ? 1 : -1);
    },
    filtredByCompany: (state) => {
      state = state.sort((a, b) => a.company.name > b.company.name? 1 : -1);
    },
    addComment: (state, action: PayloadAction<userComment>) => {
      const id = action.payload.id
      const comment = action.payload.comment
      return state.forEach(user => {
        if (user.id === id) {
          user.comment = comment
        }
      } )
    }
  },
});

export const { addUsers, filtredByCity, filtredByCompany } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.persons;

export default counterSlice.reducer;
