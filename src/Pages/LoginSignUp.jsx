import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
    return (
        <div className='loginSignUp'>
<div className="loginSignUp-container">
    <h1>Inscription</h1>
    <div className="loginSignUp-fields">
        <input type="text" placeholder='Votre Nom' />
        <input type="email" placeholder='Votre e-mail' />
        <input type="password" placeholder='Votre mot de passe' />
    </div>
    <button>s'inscrire</button>
    <p className="loginSignUp-login">Déja membre? <span>Se connecter</span></p>
<div className="loginSignUp-agree">
    <input type="checkbox" name='' id='' />
    <p>J'accepte les termes et condition de la protection des données</p>
</div>
    </div>
</div>
        
    )
}

export default LoginSignUp