import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidateSlice";  // ✅ Correct import

const store = configureStore({
  reducer: {
    candidates: candidateReducer,
  },
});

export default store;
