import { configureStore } from "@reduxjs/toolkit";
import  catagoryDataIdSlice  from "./catagorDataIdSlice";

export  const store=configureStore({
    reducer:{
        catagory:catagoryDataIdSlice
    }
})