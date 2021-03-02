import React from 'react'

//assets
import mail from '../../assets/svg/mail.svg'
//styles
import './Footer.scss'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <img className="footer__mailsvg"src={mail} alt="mail svg icon"/>
                <p className="footer__email">support@experienceconcerts.co</p>
            </div>
            <div className="footer__bottom">
                <div className="footer__icon">EXP|CON</div>
                <p className="footer__hang">2019 © All Rights Reserved | Speer Technologies Incorporated</p>
            </div>
        </footer>
    )
}

export default Footer
