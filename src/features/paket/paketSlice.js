import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPaket = createAsyncThunk(
    'paket/fetchPaket',
    async () => {
        const response = await fetch('http://servicesimager.my.id/api/package/active');
        const data = await response.json();
        return data
    }
);

const initialState = {
    data: [],
    isLoading: true,
    error: null
}

const paketSlice = createSlice({
    name: 'paket',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchPaket.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(fetchPaket.fulfilled, (state, action)=>{
                state.isLoading = false,
                state.data = action.payload.data
            })
            .addCase(fetchPaket.rejected, (state, action)=>{
                state.isLoading = false,
                state.error = action.error.message
            })
    }
})

export default paketSlice.reducer;