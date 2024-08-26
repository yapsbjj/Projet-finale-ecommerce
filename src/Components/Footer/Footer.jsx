import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import insta_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pinterest_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
         <div className="footer_logo">
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
            </div>  
            <ul className="footer-links">
                <li>Qui nous sommes?</li>
                <li>Catalogue</li>
                <li>boutiques</li>
                <li>A propos</li>
                <li>Contact</li>
                </ul> 
                <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={insta_icon} alt=''/>
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt=''/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt=''/>
                </div>
               
                </div>
                <div className="footer_copyright">
                    <hr />
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
        </div>
    )
}

export default Footer