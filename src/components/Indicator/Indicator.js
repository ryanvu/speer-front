import React from 'react'


//styles
import './Indicator.scss';

const Indicator = ({ index, check }) => {
    
    return (
        <div className={(check === index) ? 'indicator indicator__active' : 'indicator'}>
            
        </div>
    )
}

export default Indicator
