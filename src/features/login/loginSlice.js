import { createSlice } from "@reduxjs/toolkit";


const getSessionStorageLogin = () => {
    const getSession = sessionStorage.getItem('login');
    if (getSession) {
        return JSON.parse(getSession);
    }
    return null;
};

const initialState = getSessionStorageLogin() || {
    status: null,
    user: {
        name: null,
        email: null,
        avatar: null,
        token: null,
    },
    isLogin: false
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginSlice: (state, action)=>{
            const {status, name, email, avatar, token} = action.payload
            state.status = status,
            state.user.name = name,
            state.user.email = email,
            state.user.avatar = avatar,
            state.user.token = token,
            state.isLogin = true
        }
    }
})

export const { setLoginSlice } = loginSlice.actions
export default loginSlice.reducer