import { createSlice } from "@reduxjs/toolkit";

// Initial state for the slice
const initialState = {
  currentUser: null,
  error: false,
  loading: false,
};

// Creating the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to log in a user
    signInStart: (state) => {
      state.loading = true;
      state.error = null; // Reset any previous errors
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload; // Payload would be the user data
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.error = action.payload; // Payload would be the error message
      state.loading = false;
      state.error = true;
    },

    // Action to log out a user
    signOut: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

// Exporting the actions for use in components
export const { signInStart, signInSuccess, signInFailure, signOut } =
  userSlice.actions;

// Exporting the reducer to be used in the store
export default userSlice.reducer;
