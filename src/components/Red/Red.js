import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
//context
import { useAppContext } from '../../context/AppContext';
//assets
import speakerL from '../../assets/images/med-sp-l.png'
import speakerR from '../../assets/images/med-sp-r.png'
import CustomCursor from '../CustomCursor/CustomCursor';
//styles
import './Red.scss';

const Red = () => {

    const { changeHeaderCol, isNavOpen } = useAppContext();
    const { ref, inView } = useInView({
        threshold: 0.8
    })

    useEffect(() => {
        if (inView) {
            if (isNavOpen) {
            changeHeaderCol("#D34848")
            } else {
                changeHeaderCol("#FFFFFF")
            }
        }
    }, [inView, isNavOpen])
    
    
    return (
        <div ref={ref} className="red">
            <CustomCursor />
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
