import UserPortfolioA from '../screens/usersPortfolio/showUsersPortfolioA';
import UpdatePortfolio from '../screens/updatePortfolio/updatePortfolio';
import PortfolioARouter from './portfolioARouter';
import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';

export default function PortfolioRouter() {


    return (
        <>
            <Routes>
                <Route exact element={<PortfolioARouter />} path="/A/*" />
            </Routes>
        </>
    )
}