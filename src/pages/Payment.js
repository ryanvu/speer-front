import React, { useEffect } from 'react'
import './Payment.scss';

//context
import { useAppContext } from '../context/AppContext';
import Radio from '../components/Radio/Radio';
import Input from '../components/Input/Input';
import Select from '../components/Select/Select';

//data
import { months, year, countries } from '../data/selectOptions';
import Button from '../components/Button/Button';

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
                            <Select options={countries} label="country"/>
                        </div>
                        <p className="payment__tos">By continuing, I acknowledge that I’ve read and agree to the <a className="payment__link" href="#">Terms of Service</a> & <a className="payment__link" href="#">Privacy Policy</a>.</p>
                        <Button text="DOWNLOAD" size="xs"/>
                    </div>
                    <div className="payment__middle-right">
                        <p className="payment__step">3. Credit Card Information</p>
                       
                            <Input label="cardholder's name"/>
                            <Input label="card number"/>
                            <div className="payment__inputwrap">
                                <Select options={months} width="321px" label="expiry month"/>
                                <Select options={year} width="321px" label="expiry year"/>
                            </div>
                            <Input label="CVV" />
                            
                    </div>
                </div>
                
            </form>
            
        </main>
    )
}

export default Payment
