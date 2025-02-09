import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {
  isHamburgerOpen: boolean;
}

const initialState: NavbarState = {
  isHamburgerOpen: true,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleHamburger: (state) => {
      state.isHamburgerOpen = !state.isHamburgerOpen;
    },
  },
});

export const { toggleHamburger } = navbarSlice.actions;
export default navbarSlice.reducer;
