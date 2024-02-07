import { createSlice } from "@reduxjs/toolkit";

// const initialState = { name: "robin" };
export const nameslice = createSlice({
  name: "nameofslice",
  initialState :{name: "robins"},
  reducers: {
    nametodot(state, action) {
        console.log("dotted");
      state.name = "dot";
    },
    customanme(state, action) {
      state.name = action.payload;
    },
  },
});
