import React from 'react'
//assets
import speakerT from '../../assets/images/sm-sp-top.png';
import speakerB from '../../assets/images/sm-sp-bot.png';
//components
import Testimonial from './Testimonial'
//styles
import './Reviews.scss';

const Reviews = () => {
    return (
        <div className="review">
            <div className="review__speakers">
                <img className="review__speakers-top" src={speakerT} alt="top speaker image"/>
                <img className="review__speakers-bot" src={speakerB} alt="bottom speaker image"/>
            </div>

            <div className="review__wrap">
                <h4 className="review__title">REVIEWS</h4>
                <div className="review__testimonials">
                    <Testimonial title="ARTIST" comment="“Love it, it’s the Best.I can’t live without it!”"/>
                    <Testimonial title="PRODUCER" comment="“Love it, it’s the Best.I can’t live without it!”"/>
                    <Testimonial title="MUSIC FAN" comment="“Love it, it’s the Best.I can’t live without it!”"/>
                </div>
            </div>
        </div>
    )
}

export default Reviews
