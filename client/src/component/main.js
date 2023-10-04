import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './login/login';
import TextArea from './text area/TextArea';


export default function Main() {


    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact element={<Login />} path="/login" />
                <Route element={<TextArea />} path="/text" />
            </Routes>
        </>
    )
}


