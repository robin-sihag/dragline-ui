import { configureStore } from "@reduxjs/toolkit";
import { nameslice } from "./reducer";

export const redstore = configureStore({
  reducer:{
    ss: nameslice.reducer
  }
})