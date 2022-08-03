import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Login/loginSlice';


export const store = configureStore({
    reducer: {
        userdata: userReducer
    },
})