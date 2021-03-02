import React from 'react'

const Select = ({label, name}) => {
    return (
        <div className="select">
            <label htmlFor={label}>{label}</label>
            <select name={name} id={name}>
                
            </select>
        </div>
    )
}

export default Select
