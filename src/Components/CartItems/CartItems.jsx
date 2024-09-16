import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContest.jsx';
import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png';

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <div className="cartitems-format-main">
                <p>Produits</p>
                <p>Titre</p>
                <p>Prix</p>
                <p>Quantité</p>
                <p>Total</p>
                <p>Supprimer</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cart-items-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>{e.new_price}€</p>
                                <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}€</p>
                                <img className='cartItems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove item" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
                
            })}

<div className="cart-items-down">
                    <div className="cart-items-total">
                        <h1>Total</h1>
                        <div>
                            <div className="cart-items-total-item">
                                <p>Sous-total</p>
                                <p>{getTotalCartAmount()}€</p>
                            </div>
                            <hr />
                            <div className="cart-items-total-item">
                                <p>Frais de port</p>
                                <p>Gratuit</p>
                            </div>
                            <hr />
                            <div className="cart-items-total-item">
                                <h3>Total</h3>
                                <h3>{getTotalCartAmount()}€</h3>
                            </div>
                        </div>
                        <button>Procéder au paiement</button>
                    </div>
                    <div className="cart-items-promocode">
                        <p>Si vous avez un code promo, Entrer le ici</p>
                        <div className="cart-items-promobox">
                            <input type="text" placeholder='Code Promo'/>
                            <button>Valider</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CartItems;
