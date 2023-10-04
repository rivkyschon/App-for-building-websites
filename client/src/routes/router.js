import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';
import HomePage from '../screens/home page/HomePage';
import Login from '../component/login/login'
import PortfolioA from '../screens/portfolioTemplates/portfolioA/portfolioA'
import TextArea from '../component/text area/TextArea';
import GettingStarted from '../screens/getting started/gettingStarted'
import Editor from '../component/text area/TextArea';
import FileUploadComponent from '../component/myImage/MyImage';
import Image1 from '../component/image';
import UserPortfolioA from '../screens/usersPortfolio/showUsersPortfolioA';
import UpdatePortfolio from '../screens/updatePortfolio/updatePortfolio';
import BlogA from '../screens/blogTemplates/blogA/blogA';
import Spinner from '../component/loading/loading';
import FAQ from '../screens/FAQ/FAQ'
import ShowUserBlogA from '../screens/userBlogA/userBlogA';
import Alert from '../component/alert/alert';
import WebsiteMsg from '../component/uploadedWebsiteMsg/websiteMsg'
import PortfolioRouter from './portfolioRouter';
import BlogRouter from './BlogRouter';
import Name from '../component/contact/contact';
import UnreadMessages from '../screens/unreadMessages/unreadMessages';
import Reply from '../component/reply/reply';
import ResetPassword from '../component/ReserPassword/ResetPassword';
import About from '../screens/about/about';

export default function Router() {


    return (
        <>
            <Routes>
                <Route exact element={<Image1 />} path="/1" ></Route>
                <Route exact path="/" element={<HomePage />} />
                <Route exact element={<Login />} path="/login" />
                <Route exact element={<GettingStarted />} path="/starting" />
                <Route exact element={<PortfolioRouter />} path="/portfolio/*" />
                <Route exact element={<BlogRouter/>} path="/blog/*" />
                <Route element={<TextArea />} path="/text" />
                <Route element={<FileUploadComponent />} path="/pic" />
                <Route element={<Spinner />} path="/spinner" />
                <Route element={<FAQ/>} path="/faq"/>
                <Route element={<Alert/>} path="/alert"/>
                <Route  element={<WebsiteMsg/>} path="/3"/>
                <Route  element={<Name/>} path="/4"/>
                <Route  element={<UnreadMessages/>} path="/5"/>
                <Route  element={<Reply/>} path="/6"/>
                <Route  element={<ResetPassword/>} path="/email/:email/7"/>
                <Route element={<About/>} path="/about"/>
            </Routes>
        </>
    )
}