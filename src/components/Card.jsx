import React from 'react'
//import star from '/images/star.png'
//import Katie from '/katie'




export default function Card(props){
    let cardBadge 
    if (props.openSpots===0){
        cardBadge = 'SOLD OUT'
    }else if (props.location ==="Online"){
        cardBadge = 'ONLINE'
    }

    return (
        <div className='card'>
            {
                cardBadge &&
                <div className='card-badge'>{cardBadge}</div>
            }
            <img src={`/images/${props.coverImg}`} className='card-image'/>
            <div className='card-info'>
                <img src="/images/star.png" className='card-star' />
                <span >{props.stats.rating}</span>
                <span className='grey'> (6)</span>
                <span className='grey'> .USA</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p><span className='strong'>From {props.price}$</span> / person</p>
        </div>
    )
}