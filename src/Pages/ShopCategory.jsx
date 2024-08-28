import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import {ShopContext} from '../Context/ShopContest';
import dropdown_icon from '../Components/Assets/Frontend_Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {

    const {all_product} = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img src={props.banner} alt=''/>
            <div className="shopCategory-indexSort">
                <p>
                    <span>De 1-12</span> sur 36
                </p>
                <div className="shopCategory-sort">
                    Tri par <img src={dropdown_icon} alt=''/>
                </div>
            </div>
            <div className="shopCategory-products">
                {all_product.map((item,i)=>{
                    if (props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory