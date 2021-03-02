import React from 'react'
import Tier from '../components/Tier/Tier';
import { basic, advpro } from '../data/tierLists';

import './Price.scss';

const Price = () => {
    return (
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
    )
}

export default Price