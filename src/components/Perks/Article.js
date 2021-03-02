import React from 'react'

//style
import './Article.scss';

const Article = ({title, caption, color, captionCol}) => {
    return (
        <article className="article">
            <div className="article__underline" style={color? { border:`1.5px solid ${color}`, background: `${color}` } : null}/>
            <p className="article__title" style={color ? {color: `${color}`} : null}>{title}</p>
            <p className="article__caption" style={captionCol ? {color: `${captionCol}`} : null}>{caption}</p>
        </article>
    )
}

export default Article
