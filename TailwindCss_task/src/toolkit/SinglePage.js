import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const singlePage=createAsyncThunk("cards", async(id,{rejectWithValue})=>{
    try{
      const response = await axios.get(`http://localhost:3000/products/${id}`)
      return response.data;
    }catch(error) {
      return rejectWithValue(error.message);
    }
})

const singlePageData= createSlice({
    name:"singleCardData",
    initialState:{
    data:[],
    status:"",
    error:null,
    },

    extraReducers: (builder)=>{
        builder
        .addCase(singlePage.pending,(state) => {
            state.status="loading.."
        })
        .addCase(singlePage.fulfilled,(state,action)=>{
            (state.data=action.payload),(state.status="success")
        })
        .addCase(singlePage.rejected, (state,action)=>{
            (state.error=action.payload), (state.status="failed")
        })
    }
    
})
export default singlePageData.reducer;