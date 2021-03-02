import React from 'react'
//styles
import './Input.scss';


const Input = ({label, width }) => {
    return (
        <div className="input">
            <label className="input__label" htmlFor={label}>{label.toUpperCase()}</label>
            <input className="input__textbox" type="text" style={width ? {width: `${width}`} : null}/>
        </div>
    )
}

export default Input
