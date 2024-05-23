import React from 'react';
import './header.css';
import userData from '../userdata';
import logo from '../Assets/Logo.svg';
import search from '../Assets/Icons/Magnifying Glass.svg'
function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
                {/* <input className="search-bar" type="text" placeholder="Search vehicle" /> */}
                <div className="search-bar">
                    <img src={search} alt="Logo" className="search-logo" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header-right">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="user-info">
                    <span>{userData.name}</span>
                    <img src={userData.avatarUrl} alt="User Avatar" className="avatar" />
                </div>
            </div>
        </header>
    );
}

export default Header;
