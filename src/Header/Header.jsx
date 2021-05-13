import React from 'react';
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="rs-header" id="home">
            <div className="container">
                <div className="rs-header__nav">
                    <a href="#linkToMain" className="rs-header__logo">
                        Kelvin`s front-end
                    </a>
                    <Navbar/>
                </div>
                <div className="rs-header__main">
                    <h1 className="rs-header__title">
                        I make best pages
                    </h1>
                    <h3 className="rs-header__description">
                        Hi! My name George Kelvin. I am front-end developer. I can make one-page website any complexity using basic HTML and React technology
                    </h3>
                    <button className="rs-header__button">
                        Explore!
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;