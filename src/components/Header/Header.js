import React, { useState } from 'react';
import './Header.scss';

//assets
import hamburger from '../../assets/svg/hamburger.svg';

const Header = () => {

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(prev => !prev)
    }
    return (
        <header className="header">
            <div className="header__logo">
                <img onClick={toggleNav} className="header__logo-hb" src={hamburger} alt="hamburger icon svg"/>
                <h1 className="header__logo-title">EXP|CON</h1>
            </div>

            {showNav && 
            <nav className="header__nav">
                <ul className="header__nav-container">
                    <li className="header__nav-item">WHAT IS IT</li>
                    <li className="header__nav-item">PERKS</li>
                    <li className="header__nav-item">PRICING</li>
                </ul>    
            </nav>}
        </header>
    )
}

export default Header
