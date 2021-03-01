import React from 'react'
import { useAppContext } from '../../context/AppContext';

import './Button.scss';
const Button = ({ text, size }) => {

    const { colour } = useAppContext();

    const gradient = {
        color: colour,
        background: 'transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 34%, #D34848 65%, #FFB33F 100%) 0% 0% no-repeat padding-box'
    }
    const white = {
        color: colour,
        background: "white"
    }
    console.log(colour)
    return (
        <button className={size ? `btn btn__${size}` : `btn`} style={(colour === "#FFFFFF" ? gradient : white)}>
            {text}
        </button>
    )
}

export default Button
