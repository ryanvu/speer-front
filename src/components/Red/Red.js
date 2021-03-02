import React from 'react'

//assets
import speakerL from '../../assets/images/med-sp-l.png'
import speakerR from '../../assets/images/med-sp-r.png'
//styles
import './Red.scss';

const Red = () => {
    return (
        <div className="red">
            <div className="red__wrap">
                <h4 className="red__title">SUPERIOR SOUND</h4>
                <p className="red__caption">Experience live versions of your favourite songs.</p>
                <button className="red__btn">SEE DEMO</button>
            </div>
            <div className="red__speakers">
                <img className="red__speakers-r"src={speakerL} alt=""/>
                <img className="red__speakers-l"src={speakerR} alt=""/>
            </div>
        </div>
    )
}

export default Red
