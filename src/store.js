import { configureStore } from "@reduxjs/toolkit";
import { nameslice } from "./reducer";

export const redstore = configureStore({
  reducer:{
    namededitingreducer: nameslice.reducer
  }
})