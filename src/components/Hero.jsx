import React from 'react'
import heroimg from '/images/photo-grid.png'


export default function Hero(){
    return (
        <section className='hero'>
            <img src = '/images/photo-grid.png' className = 'hero-img'/>
            <h3 className='hero-header'>Online Experiences</h3>
            <p className='hero-content'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </section>
    )
}