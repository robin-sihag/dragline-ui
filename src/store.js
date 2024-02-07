import { configureStore } from "@reduxjs/toolkit";
import { namedSliced} from "./reducers";

const RedStore = configureStore({
  reducer:{ss: namedSliced.reducer }
});

export default RedStore;
