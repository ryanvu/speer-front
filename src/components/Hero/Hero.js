import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'

//assets
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';
import hero3 from '../../assets/images/hero3.png';
import Button from '../Button/Button';
import Indicator from '../Indicator/Indicator';
//styles
import './Hero.scss';

const Hero = () => {
    const [index, setIndex] = useState(0);
    const imgs = [hero1, hero2, hero3];

    useEffect(()=> {
        const interval = setInterval(()=>{
            if(index >= 2) {
                setIndex(0)
            } else {
                setIndex(i => {return i + 1})
            }
        }, 10000)

        return () => {
            clearInterval(interval);
        }
    }, [index])

    const selectImage = (index) => {
        setIndex(index)
    }
    return (
        
            <section className="hero">
                <AnimatePresence initial={false}>
                    <motion.img 
                    initial={{opacity: 0, skew: -50, scale: 0}}
                    animate={{opacity: 1, skew: 0, scale: 1, transition: {duration: 2}}}
                    exit={{opacity: 0, skew: 100, scale: 0, transition: {duration: 2}}}
                    className="hero__img" 
                    key={imgs[index]}
                    src={imgs[index]} alt="Hero Image of concerts"/>
                </AnimatePresence>
                <div className="hero__wrap">
                    <h2 className="hero__title">INTERACTIVE CONCERT EXPERIENCE</h2>
                    <p className="hero__caption">Experience your favourite artists like never <br />
                    before and from the comfort of your own home.</p>
                    <Link className="hero__btn" to="/price"><Button text="TRY IT NOW" size="med"/></Link>
                </div>
            <div className="hero__indicator">
                {imgs.map((img, i)=>{
                    return <Indicator handleClick={selectImage} check={i} index={index} key={i}/>
                })}
            </div>
            </section>
        
    )
}

export default Hero
