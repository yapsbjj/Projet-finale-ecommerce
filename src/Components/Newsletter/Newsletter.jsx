import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Profitez d'offres exclusive par e-mail</h1>
            <p>Inscriver vous a notre newsletter pour profiter de nos nouveautés</p>
            <div>
                <input type="email" placeholder='Votre Email' />
                <button>M'inscrire</button>
            </div>
        </div>
    )
}

export default Newsletter