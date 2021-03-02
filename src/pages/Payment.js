import React, { useEffect } from 'react'
import './Payment.scss';

//context
import { useAppContext } from '../context/AppContext';
import Radio from '../components/Radio/Radio';
import Input from '../components/Input/Input';

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
                <fieldset className="payment__radio" id="plan">
                    <Radio name="plan" value="basic" label="basic" color="#D24848"/>
                    <Radio name="plan" value="advanced" label="advanced" color="#FFB33F"/>
                    <Radio name="plan" value="pro" label="pro" color="#1FE1E9"/>
                </fieldset>
                <div className="payment__middle">
                    <div className="payment__middle-left">
                        <p className="payment__step">2. Billing Information</p>
                        <div className="payment__wrapper">
                            <Input label="full name"/>
                            <Input label="billing address"/>
                            <div className="payment__inputwrap">
                                <Input width="320px" label="city"/>
                                <Input width="320px" label="postal code"/>
                            </div>
                        </div>
                    </div>
                    <div className="payment__middle-right">
                        <p className="payment__step">3. Credit Card Information</p>
                       
                            <Input label="cardholder's name"/>
                            <Input label="card number"/>
                            <div className="payment__inputwrap">
                                <Input width="321px" label="city"/>
                                <Input width="321px" label="postal code"/>
                            </div>
                      
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Payment
