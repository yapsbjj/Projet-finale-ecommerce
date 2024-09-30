import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/Frontend_Assets/all_product';



export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
//Ajouter un produit dans le logo du panier
const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
    
}
//Supprimer un produit du panier
const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
}
//Afficher la somme des produits du panier
const getTotalCartAmount = () =>  {
    let totalAmount = 0;
    for(const item in cartItems)
        {
        
            if(cartItems[item]>0)
            {
            let itemInfo = all_product.find((product)=>product.id===Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];
            }
       
        return totalAmount;
        }
}
//Afficher le total final du panier
const getTotalCartItems = () => {
let totalItem = 0;
for(const item in cartItems)
{
    if(cartItems[item]>0)
    {
        totalItem+=cartItems[item];
    }
}
return totalItem;
}

const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    
    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;