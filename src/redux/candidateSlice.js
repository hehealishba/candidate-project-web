import { createSlice } from "@reduxjs/toolkit";

const candidateSlice = createSlice({
  name: "candidates",
  initialState: [],
  reducers: {
    addCandidate: (state, action) => {
      state.push(action.payload);
    },
    removeCandidate: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addCandidate, removeCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;
