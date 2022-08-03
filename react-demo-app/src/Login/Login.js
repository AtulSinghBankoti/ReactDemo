import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setlogin} from './loginSlice'
import { useNavigate } from 'react-router';

export default function Login(){

    const [user, setUser] = useState({name:'', password:''}); 
    const userdata = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let loginUser=()=>{
        //console.log(">>>>"+userdata);
        //if(userdata.name === user.name && userdata.password==user.password){
            console.log(">>>>"+user);
            dispatch(setlogin(user))
            navigate('/');
       // }
    }

    let handleNameChange= (e)=>{
        setUser({...user, name:e.target.value})
    }

    let handlePasswordChange= (e)=>{
        setUser({...user, password:e.target.value})
    }

    return (
        <div>
            <Box>  
                 <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleNameChange}/> <br/>   
                 <TextField id="er" label="Password" type="password" variant="outlined" onChange={handlePasswordChange}/>  <br/>  
                 <Button variant='contained' onClick={()=>loginUser()}>Login</Button>  
            </Box>
        </div>
    );



}