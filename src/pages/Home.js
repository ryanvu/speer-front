import React, { useEffect } from 'react'
import GetEXP from '../components/GetEXP/GetEXP';
import Hero from '../components/Hero/Hero'
import Perks from '../components/Perks/Perks';
import Reviews from '../components/Reviews/Reviews';
import { useAppContext } from '../context/AppContext';
import './Home.scss'

const Home = () => {

    const { changePage } = useAppContext()
    useEffect(()=>{
        changePage("home")
    },[])
    return (
        <main className="home">
            <Hero />
            <Perks bg="#191919"/>
            <Reviews />
            <GetEXP />
        </main>
    )
}

export default Home
