
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
export default function Navbar() {
    const state = {
        menuToggle: false
    }

    return (
        <div className="body">
            <nav id="navbar" class="" >
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="#home"><i class="fas fa-chess-knight"></i> Logo</a>
                    </div>

                    <ul id="menu">
                        <li><NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink></li>
                        <li><NavLink exact={true} activeClassName='is-active' to='/starting'>Pricing</NavLink></li>
                        <li><NavLink exact={true} activeClassName='is-active' to='/FAQ'>FAQ</NavLink></li>
                        <li><NavLink exact={true} activeClassName='is-active' to='/about'>About</NavLink></li>
                    </ul>
                </div>
            </nav >

            <div class="menuIcon">
                <span class="icon icon-bars"></span>
                <span class="icon icon-bars overlay"></span>
            </div>


            <div class="overlay-menu">
                <ul id="menu">
                    <li><a href="#home" className="a">Home</a></li>
                    <li><a href="#services" className="a">Services</a></li>
                    <li><a href="#about" className="a">About</a></li>
                    <li><a href="#contact" className="a">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}