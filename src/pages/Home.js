import React, { useEffect } from 'react'
import CustomCursor from '../components/CustomCursor/CustomCursor';
import GetEXP from '../components/GetEXP/GetEXP';
import Hero from '../components/Hero/Hero'
import Perks from '../components/Perks/Perks';
import Red from '../components/Red/Red';
import Reviews from '../components/Reviews/Reviews';
import Yellow from '../components/Yellow/Yellow';
import { useAppContext } from '../context/AppContext';
import './Home.scss'

const Home = () => {

    const { changePage, changeScrollingState } = useAppContext()
    useEffect(()=>{
        changePage("home")
    },[])

    useEffect(()=> {
        let scrollTimer = null;
        window.addEventListener('scroll', () => {
            if (scrollTimer !== null){
                clearTimeout(scrollTimer);
                changeScrollingState(true)
            }
            scrollTimer = setTimeout(() => {
                changeScrollingState(false)
            }, 500)
        }, false)
    }, [])
    return (
        <main className="home">
            <Hero />
            <Red />
            <Yellow />
            <Perks bg="#191919"/>
            <Reviews />
            <GetEXP />
        </main>
    )
}

export default Home
