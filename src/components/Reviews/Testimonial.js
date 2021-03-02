import React from 'react'
import Stars from './Stars'

//styles
import './Testimonial.scss';

const Testimonial = ({title, comment}) => {
    return (
        <div className="testimonial">
            <Stars />
            <p className="testimonial__title">{title}</p>
            <p className="testimonial__comment">{comment}</p>
        </div>
    )
}

export default Testimonial
