import { configureStore } from "@reduxjs/toolkit";
import  userSlices  from "./slices/UserSlice";
const store=configureStore({
    reducer:{
        users:userSlices
    }
})
export default store