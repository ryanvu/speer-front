import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

//context
import { useAppContext } from '../../context/AppContext'; 
//styles
import './Header.scss';

//assets
import hamburger from '../../assets/svg/hamburger.svg';
import hamburgerb from '../../assets/svg/hamburger-black.svg';

const Header = (props) => {

    const [showNav, setShowNav] = useState(false);

    const { headerCol, changeHeaderCol, page } = useAppContext();

    const closeNav = () => {
        setShowNav(false);
    }
    const toggleNav = () => {
        if(page === "pay"){
            if (headerCol === "#000000") {
                changeHeaderCol("#FFFFFF")
                setShowNav(prev => !prev)
            }
            if (headerCol === "#FFFFFF") {
                changeHeaderCol("#000000")
                setShowNav(prev => !prev)
            }
        } else {
            setShowNav(prev => !prev)
        }
    }

    return (
        <header className="header">
            <div className="header__logo">
                <img onClick={toggleNav} className="header__logo-hb" src={(headerCol === "#000000") ? hamburgerb : hamburger} alt="hamburger icon svg"/>
                <h1 className="header__logo-title" style={(headerCol === "#000000") ? {color: `${headerCol}`} : null}>EXP|CON</h1>
            </div>
        <AnimatePresence>
            {showNav && 
            <motion.nav 
            
            initial={{scale: 0}}
            animate={{scale: 1, originX: 0, originY: 0}}
            transition={{duration: 0.75}}
            exit={{scale: 0, transition:{duration: 0.75}}}
            className="header__nav">
                <ul className="header__nav-container">
                    <motion.li onClick={closeNav}className="header__nav-item"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.25, duration: 0.5}}
                    ><Link className="header__nav-link" to="/">WHAT IS IT</Link></motion.li>
                    <motion.li onClick={closeNav}className="header__nav-item"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.35, duration: 0.5}}
                    ><Link className="header__nav-link" to="/">PERKS</Link></motion.li>
                    <motion.li onClick={closeNav}className="header__nav-item"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.45, duration: 0.5}}
                    ><Link className="header__nav-link" to="/price">PRICING</Link></motion.li>
                </ul>    
            </motion.nav>}
        </AnimatePresence>
        </header>
    )
}

export default Header
