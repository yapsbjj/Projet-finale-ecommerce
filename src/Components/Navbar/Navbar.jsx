import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu,setMenu] = useState("Boutique");

    return (
        <div className='navbar'>
<div className="nav-logo">
   <img src={logo} alt=''/> 
    <p>SHOPPER</p>
</div>
<ul className="nav-menu">
    <li onClick={()=>{setMenu("Boutique")}}><Link style={{ textDecoration: 'none' }} to='/'>Boutique</Link>{menu==="Boutique"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Homme")}}><Link style={{ textDecoration: 'none' }} to='/homme'>Homme</Link>{menu==="Homme"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Femme")}}><Link style={{ textDecoration: 'none' }} to='/femme'>Femme</Link>{menu==="Femme"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Enfant")}}><Link style={{ textDecoration: 'none' }} to='/enfant'>Enfant</Link>{menu==="Enfant"?<hr/>:<></>}</li>
</ul>
<div className="nav-login-cart">
   <Link to='/login'><button>Login</button></Link>
   <Link to='/cart'><img src={cart_icon} alt=""/></Link>
    <div className="nav_cart_count">0</div>
</div>
        </div>
    )
}

export default Navbar