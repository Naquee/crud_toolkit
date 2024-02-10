import { createSlice } from "@reduxjs/toolkit";

// https://65c75786e7c384aada6e6894.mockapi.io/crud_appication

export const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null,
    }
})


export default userDetail.reducer;