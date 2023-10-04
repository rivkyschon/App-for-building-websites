import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';
import BlogARouter from './BlogARouter';


export default function BlogRouter() {


    return (
        <>
            <Routes>
                <Route exact element={<BlogARouter />} path="/A/*" />
            </Routes>
        </>
    )
}