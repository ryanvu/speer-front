import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//styles
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
        <AnimatePresence>
            {showNav && 
            <motion.nav 
            initial={{scale: 0}}
            animate={{scale: 1, originX: 0, originY: 0}}
            transition={{duration: 0.75}}
            exit={{scale: 0, transition:{duration: 0.75}}}
            className="header__nav">
                <ul className="header__nav-container">
                    <motion.li className="header__nav-item"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.75, duration: 0.5}}
                    >WHAT IS IT</motion.li>
                    <motion.li className="header__nav-item"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.88, duration: 0.5}}
                    >PERKS</motion.li>
                    <motion.li className="header__nav-item"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1, duration: 0.5}}
                    >PRICING</motion.li>
                </ul>    
            </motion.nav>}
        </AnimatePresence>
        </header>
    )
}

export default Header
