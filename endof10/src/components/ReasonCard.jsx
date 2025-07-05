import React from 'react'

export const ReasonCard = (props) => {
    return(
        <div className = "reasonCard">
            <div className = "title">{props.title}</div> 

            <div className="authorDate">
                {props.author}
                {'  '} {'  '}
                {props.date}
            </div>

            <div className='description'>
                {props.description}
            </div>
        </div>
    )
}