import { createSlice } from "@reduxjs/toolkit";

export const catagoryDataIdSlice=createSlice({
    name:'catagory',
    initialState:{
        catagoryDataId:'1'
    },
    reducers:{
        add:(state,action)=>{
            state.catagoryDataId=(action.payload)
        } 
    }
})
export const {add}=catagoryDataIdSlice.actions
export default catagoryDataIdSlice.reducer