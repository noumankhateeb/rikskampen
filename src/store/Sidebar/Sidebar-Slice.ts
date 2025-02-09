import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
    activeMenu: string | null;
}

const initialState: SidebarState = {
    activeMenu: null,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {

        setActiveMenu: (state, action: PayloadAction<string | null>) => {
            state.activeMenu = action.payload;
        },
    },
});

export const { setActiveMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
