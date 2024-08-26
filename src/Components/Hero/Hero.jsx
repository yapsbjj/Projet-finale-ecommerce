import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
            <h2>NOUVELLE COLLECTION</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Nouveautés</p>
                    <img src='' alt=''/>
                </div>
                <p>Collections</p>
                <p>Pour tous le monde</p>
            </div>
            <div className="hero-latest-btn">
             <div>Derniere collection</div>  
             
            </div>
            </div>
            <div className="hero-right">

            </div>
        </div>
    )
}

export default Hero