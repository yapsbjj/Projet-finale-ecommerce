import React from "react";
import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png';
import './Breadcrum.css'


const Breadcrum = (props) => {
    const {product} = props;
    return (
    <div className="breadcrum">
        ACCUEIL <img src={arrow_icon} alt=""/> BOUTIQUE <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt=""/> {product.name}
    </div>
    )
}

export default Breadcrum