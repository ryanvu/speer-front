import React from 'react'
import { useAppContext } from '../../context/AppContext';

import './Button.scss';
const Button = ({ text, size }) => {

    const { colour } = useAppContext();

    return (
        <button className={size ? `btn btn__${size}` : `btn`} style={{color: `${colour}`}}>
            {text}
        </button>
    )
}

export default Button
