import UserPortfolioA from '../screens/usersPortfolio/showUsersPortfolioA';
import UpdatePortfolio from '../screens/updatePortfolio/updatePortfolio';
import PotrfolioA from '../screens/portfolioTemplates/portfolioA/portfolioA';
import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';
import ShowUserBlogA from '../screens/userBlogA/userBlogA';
import BlogA from '../screens/blogTemplates/blogA/blogA';

export default function BlogARouter() {


    return (
        <>
            <Routes>
                {/* <Route exact element={<UpdateBlogA />} path="/update" /> */}
                <Route exact element={<ShowUserBlogA />} path="/user/:site_id" />
                <Route exact element={<BlogA/>} path="/create" />
            </Routes>
        </>
    )
}