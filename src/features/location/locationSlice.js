import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk(
    'location/fetchLocation',
    async () => {
        const response = await fetch('http://servicesimager.my.id/api/destination');
        const data = await response.json();
        return data
    }
);

const initialState = {
    data: [],
    isLoading: true,
    error: null
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchLocation.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(fetchLocation.fulfilled, (state, action)=>{
                state.isLoading = false,
                state.data = action.payload.data
            })
            .addCase(fetchLocation.rejected, (state, action)=>{
                state.isLoading = false,
                state.error = action.error.message
            })
    }
})

export default locationSlice.reducer;