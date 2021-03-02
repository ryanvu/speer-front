import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './GetEXP.scss';
//components
import Button from '../Button/Button';


const GetEXP = () => {
    return (
        <div className="get">
            <div className="get__block">
                <div className="get__wrap">
                    <h4 className="get__title">GET EXP|CON NOW</h4>
                    <p className="get__caption">Purchase and download the app.</p>
                </div>
                <Link className="get__btn"to="/pay"><Button text="TRY IT NOW" size="small" /></Link>
            </div>
        </div>
    )
}

export default GetEXP
