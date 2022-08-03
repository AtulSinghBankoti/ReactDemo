import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import AppBarMain from './AppBarMain';
import Login from './Login/Login';
import UserCtx from './UserContext';

export default function AppMain(){

    return (
        <div>
        <UserCtx.Provider>
        <div>
                <Routes>
                    <Route exact path="/" element={<AppBarMain/>} />
                    <Route exact path="login" element={<Login/>}/>
                </Routes>
        </div>
        </UserCtx.Provider>
        </div>
    );
}
