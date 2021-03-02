import React from 'react'
//styles
import './Radio.scss'

const Radio = ({name, value, label, color}) => {
    return (
        <div className="radio">
            <input className="radio__input" type="radio" name={name} value={value}/>
            <label className="radio__label" style={{color: `${color}`}} htmlFor={label}>{label.toUpperCase()}</label>
        </div>
    )
}

export default Radio
