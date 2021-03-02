import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext';
//components
import Tier from '../components/Tier/Tier';
//data
import { basic, advpro } from '../data/tierLists';

import './Price.scss';
import Perks from '../components/Perks/Perks';

const Price = () => {

    const { changePage } = useAppContext();

    useEffect(() => {
        changePage("price")
    }, [])

    return (
        <>
        <main className="price">
            <div className="price__wrap">
                <h1 className="price__title">PRICING</h1>
                <p className="price__caption">Test out our app today! Choose from three subscription Based payment models.</p>
            </div>
            <div className="price__subscriptions">
                <Tier src={basic} colour="#D24848" per="MONTHLY" level="BASIC" price="$9"/>
                <Tier src={advpro} colour="#FFB33F" per="YEARLY" level="ADVANCED" price="$99"/>
                <Tier src={advpro} colour="#1FE1E9" per="YEARLY" level="PRO" price="$120"/>
            </div>
        </main>
        <Perks bg="#D24848" price/>
        </>
    )
}

export default Price
