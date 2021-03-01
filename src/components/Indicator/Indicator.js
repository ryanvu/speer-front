import React from 'react'


//styles
import './Indicator.scss';

const Indicator = ({ handleClick, index, check }) => {
    
    const returnIndex = (index) => {
        handleClick(index)
    }

    return (
        <div onClick={() => {returnIndex(check)}}className={(check === index) ? 'indicator indicator__active' : 'indicator'} />
    )
}

export default Indicator
