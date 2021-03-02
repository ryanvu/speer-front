import React from 'react'

//assets
import star from '../../assets/svg/star.svg'

//styles 
import './Stars.scss';

const Stars = () => {
    return (
        <div className="stars">
            <img className="star" src={star} alt="star svg"/>
            <img className="star" src={star} alt="star svg"/>
            <img className="star" src={star} alt="star svg"/>
            <img className="star" src={star} alt="star svg"/>
            <img className="star" src={star} alt="star svg"/>
        </div>
    )
}

export default Stars
