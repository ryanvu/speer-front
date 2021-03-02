import React from 'react'

import "./Select.scss";

const Select = ({label, name, options, width}) => {
    return (
        <div className="select">
            <label className="select__label" htmlFor={label}>{label.toUpperCase()}</label>
            <select className="select__box" value="" style={(width) ? {width: `${width}`} : null} name={name} id={name}>
                {options.map((i) => {
                    return <option value={i}>{i}</option>
                })}
            </select>
        </div>
    )
}

export default Select
