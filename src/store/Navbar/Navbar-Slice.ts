import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setHamburgerOpen: (state, action: PayloadAction<boolean>) => {
      state.isHamburgerOpen = action.payload;
    },
  },
});

export const { toggleHamburger, setHamburgerOpen } = navbarSlice.actions;
export default navbarSlice.reducer;
