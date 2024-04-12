import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";



export const MainSlice = createSlice({
    name: "MAIN_SLICE",
    initialState: initialState,
    reducers: {
        

    }
});

export const Data = MainSlice.reducer;
export const {} = MainSlice.actions;
