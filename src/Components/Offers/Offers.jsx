import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
            <h1>Exclusivités</h1>
            <h1>Juste pour vous</h1>
            <p>UNIQUEMENT LES BEST SELLERS</p>
            <button>C'est par ici</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt=''/> 

            </div>
        </div>
    )
}

export default Offers