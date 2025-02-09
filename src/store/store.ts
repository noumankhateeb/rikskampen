import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
import sidebarReducer from "./Sidebar/Sidebar-Slice";
import navbarReducer from "./Navbar/Navbar-Slice";

// Redux Persist config
const persistConfig = {
    key: "root",
    storage, // Use localStorage to persist the state
};

// Persist navbar reducer (as an example)
const persistedNavbarReducer = persistReducer(persistConfig, navbarReducer);
const persistedSidebarReducer = persistReducer(persistConfig, sidebarReducer);

export const store = configureStore({
    reducer: {
        // sidebar: sidebarReducer, // Sidebar state is not persisted
        sidebar: persistedSidebarReducer, // Sidebar state is not persisted
        navbar: persistedNavbarReducer, // Navbar state is persisted
    },
});

// Create persisted store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
