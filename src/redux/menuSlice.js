import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen:true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    showMenu: (state) => {
      state.isMenuOpen = true;
    },
    hideMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, showMenu, hideMenu } = menuSlice.actions;
export default menuSlice.reducer;
