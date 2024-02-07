import { createSlice } from "@reduxjs/toolkit";

// const initialState = { name: "robin" };
export const nameslice = createSlice({
  name: "nameofslice",
  initialState :{name: "robi"},
  reducers: {
    nametodot(state, action) {
      state.name = "dot";
    },
    customanme(state, action) {
      state.name = action.payload;
    },
  },
});
