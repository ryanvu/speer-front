import React from 'react'

//styles
import './List.scss'
const List = ({src}) => {
    return (
        <ul className="list">
            {src.map(i => {
                return (
                    <li className="list__item">{i}</li>
                )
            })}
        </ul>
    )
}

export default List
