import React, { useEffect } from 'react'
import GetEXP from '../components/GetEXP/GetEXP';
import Hero from '../components/Hero/Hero'
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
            <GetEXP />
        </main>
    )
}

export default Home
