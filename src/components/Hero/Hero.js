import React, { useState } from 'react';

//assets
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';
import hero3 from '../../assets/images/hero3.png';
//styles
import './Hero.scss';

const Hero = () => {
    const [index, setIndex] = useState(0);
    const imgs = [hero1, hero2, hero3];
    return (
        <section className="hero" style={{backgroundImage: `url(${imgs[index]})`}}>
            <h2 className="hero__title">INTERACTIVE CONCERT EXPERIENCE</h2>
            <p className="hero__caption">Experience your favourite artists like never <br />
            before and from the comfort of your own home.</p>
        </section>
    )
}

export default Hero