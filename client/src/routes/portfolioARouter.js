import UserPortfolioA from '../screens/usersPortfolio/showUsersPortfolioA';
import UpdatePortfolio from '../screens/updatePortfolio/updatePortfolio';
import PotrfolioA from '../screens/portfolioTemplates/portfolioA/portfolioA';
import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';

export default function PortfolioARouter() {


    return (
        <>
            <Routes>
                <Route exact element={<UpdatePortfolio />} path="/update" />
                <Route exact element={<UserPortfolioA />} path="/user/:site_id" />
                <Route exact element={<PotrfolioA/>} path="/create" />
            </Routes>
        </>
    )
}