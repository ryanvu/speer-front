import React, { useState, useEffect } from 'react'

//styles
import './CustomCursor.scss';
const CustomCursor = () => {

    const [ mousePosition, setMousePosition ] = useState({
        x: 400,
        y: 400
    })

    const onMouseMove = (e) => {
        const {pageX: x, pageY: y} = e;
        setMousePosition({ x, y });
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        }
    }, [])

    return (
        <div className="cursor" style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}/>
    )
}

export default CustomCursor
