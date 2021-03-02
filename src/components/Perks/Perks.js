import React from 'react'

//components
import Article from './Article'

//styles
import './Perks.scss'; 
const Perks = ({bg, price}) => {
    return (
        <div id="perks" className="perks" style={bg ? {background: `${bg}`} : null}>
            <h4 className="perks__title">PERKS</h4>
            {price ? 
            <div className="perks__articles">
                <Article color="#FFFFFF" title="Subscription Payment Model" captionCol="0b0b0b"caption="No commitment, cancel anytime. Never worry about forgetting a payment again!"/>
                <Article color="#FFFFFF" title="No Fee Cancellation Policy" captionCol="0b0b0b"caption="No commitment, cancel anytime. Never worry about forgetting a payment again!"/>
                <Article color="#FFFFFF" title="Subscription Payment Model" captionCol="0b0b0b"caption="No commitment, cancel anytime. Never worry about forgetting a payment again!"/>
            </div>
            :
            <div className="perks__articles">
                <Article color="#D34848" title="Subscription Payment Model" caption="No commitment, cancel anytime. Never worry about forgetting a payment again!"/>
                <Article color="#1FE1E9" title="No Fee Cancellation Policy" caption="No commitment, cancel anytime. Never worry about forgetting a payment again!"/>
                <Article color="#FFB33F" title="Subscription Payment Model" caption="No commitment, cancel anytime. Never worry about forgetting a payment again!"/>
            </div>
            }
        </div>
    )
}

export default Perks
