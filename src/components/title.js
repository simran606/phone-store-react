import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="container title-div">
            <h1 className="name-text">{name} <strong className="title-text">{title}</strong></h1>
        </div>
    )
}
