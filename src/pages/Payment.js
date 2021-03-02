import React, { useEffect } from 'react'
import './Payment.scss';

//context
import { useAppContext } from '../context/AppContext';

const Payment = () => {

    const { changeHeaderCol, changePage } = useAppContext();

    useEffect(() => {
        changePage("pay")
        changeHeaderCol("#000000")
    }, [])

    return (
        <main className="payment">
            <h2 className="payment__title">PAYMENT</h2>

            <form className="payment__form" action="submit">
                <p className="payment__step">1. Select your plan</p>
                <fieldset id="plan">
                    
                    <input type="radio" name="plan" value="basic"/>
                    <label htmlFor="basic">BASIC</label>
                    
                    <input type="radio" name="plan" value="advanced"/>
                    <label htmlFor="advanced">ADVANCED</label>
                    
                    <input type="radio" name="plan" value="pro"/>
                    <label htmlFor="pro">PRO</label>
                </fieldset>
                <p className="payment__step">2. Billing Information</p>
            </form>
        </main>
    )
}

export default Payment
