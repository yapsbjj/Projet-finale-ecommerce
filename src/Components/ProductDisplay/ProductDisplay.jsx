import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContest";

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="productDisplay">
            <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay-img">
                <img className="productDisplay-main-img" src={product.image} alt="" />
            </div>
            </div>
            <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">${product.old_price}</div>
                <div className="productDisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productDisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, est? Nam perspiciatis eaque minus unde cum ratione facere culpa! Fugiat laboriosam optio, debitis molestiae repellendus excepturi. Odit quia reiciendis, dolore soluta ab 
                recusandae aspernatur saepe obcaecati provident necessitatibus eos laboriosam minima labore
                 
                  
            </div>
            <div className="productDisplay-right-size">
                <h1>Choisir la taille</h1>
                <div className="productDisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button  onClick={()=>{addToCart(product.id)}}>Ajouter au panier</button>
            <p className="productDisplay-right-category"><span>Categorie :</span> Femme, T-shirt, Crop Top</p>
            <p className="productDisplay-right-category"><span>Tags :</span> Moderne, Nouveauté</p>
            </div>
        </div>
    )
}

export default ProductDisplay