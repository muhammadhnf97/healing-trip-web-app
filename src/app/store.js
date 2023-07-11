import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import paketReducer from '../features/paket/paketSlice'
import locationReducer from '../features/location/locationSlice'

export const store = configureStore({
    reducer: {
        login : loginReducer,
        paket : paketReducer,
        location : locationReducer
    }
})