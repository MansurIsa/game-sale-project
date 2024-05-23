import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";



export const MainSlice = createSlice({
    name: "MAIN_SLICE",
    initialState: initialState,
    reducers: {
        handleLoginRegister: (state,action)=>{
            state.loginRegisterModal=true
        },
        closeForm: (state,action)=>{
            state.loginRegisterModal=false
        },
        getUserObjFunc: (state,action)=>{
            state.userObj=action.payload
        },
        getProductsFunc: (state,action)=>{
            state.products=action.payload
        },
        getProductElFunc: (state,action)=>{
            state.productEl=action.payload
        },

    }
});

export const Data = MainSlice.reducer;
export const {handleLoginRegister,closeForm,getUserObjFunc,getProductsFunc,getProductElFunc} = MainSlice.actions;
