import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
//assets
import speakerT from '../../assets/images/sm-sp-top.png';
import speakerB from '../../assets/images/sm-sp-bot.png';
//components
import Testimonial from './Testimonial'
//styles
import './Reviews.scss';
//context
import { useAppContext } from '../../context/AppContext';

const Reviews = () => {

    const { changeHeaderCol, isNavOpen } = useAppContext();
    const { ref, inView } = useInView({
        threshold: 0.8
    })

    useEffect(() => {
        if (inView) {
            if (isNavOpen) {
            changeHeaderCol("#1FE1E9")
            } else {
                changeHeaderCol("#FFFFFF")
            }
        }
    }, [inView, isNavOpen])

    return (
        <div ref={ref}className="review">
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
