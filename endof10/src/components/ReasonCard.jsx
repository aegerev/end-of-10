import React from 'react'

export const ReasonCard = (props) => {
    return(
        <div classname = "reasonCard">
            <div classname = "title">{props.title}</div> 

            <div classname="authorDate">
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