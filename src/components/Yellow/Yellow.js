import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useAppContext } from '../../context/AppContext';
//styles
import './Yellow.scss';

const Yellow = () => {

    const { changeHeaderCol, isNavOpen } = useAppContext();
    const { ref, inView } = useInView({
        threshold: 0.8
    })

    useEffect(() => {
        if (inView) {
            if (isNavOpen) {
            changeHeaderCol("#FFB33F")
            } else {
                changeHeaderCol("#FFFFFF")
            }
        }
    }, [inView, isNavOpen])

    return (
        <div ref={ref} className="yellow">
            <div className="yellow__img">

            </div>
            <div className="yellow__wrap">
                <h4 className="yellow__title">FRONT ROW SEATS</h4>
                <p className="yellow__caption">Experience concerts up close and personal.</p>
                <button className="yellow__btn">SEE DEMO</button>
            </div>
        </div>
    )
}

export default Yellow
