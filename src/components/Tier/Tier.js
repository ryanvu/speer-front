import React from 'react'
//styles
import './Tier.scss';

//components
import List from '../List/List';

const Tier = ({colour, price, level, per, src}) => {
    return (
        <div className="tier" style={{color: `${colour}`}}>
            <span className="tier__level">{level}</span>
            <div className="tier__underline" style={{border: `1.5px solid ${colour}`, background: `${colour}`}}/>
            <span className="tier__per">{per}</span>
            <span className="tier__price">{price}</span>
            <List src={src}/>
            <button className="tier__btn" style={{background: `${colour}`}}>SELECT</button>
        </div>
    )
}

export default Tier
