import {createSlice, configureStore} from '@reduxjs/toolkit'

const intitialState = {
    name:'test',
    password:'test123'
};


const logindSlice = createSlice({
    name: 'userdata',
    intitialState,
    reducers:{
       setlogin:(state, action)=>{
           console.log("here>>>");
           state.userdata={name:action.payload.name, password:action.payload.password}; 
           //return state;
       },
    },
});

export const {setlogin} = logindSlice.actions;

export default logindSlice.reducer;