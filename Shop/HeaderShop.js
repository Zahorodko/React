import React, { useState } from "react";
import "./ShopP.css"
import {MdDeleteForever} from 'react-icons/md';
import { IconContext } from "react-icons";
import { MdAddShoppingCart } from "react-icons/md";
import MenuHeader from "./MenuHeader";

const HeaderShop = (props) =>{
    let [cartOpen, setCartOpen] = useState(false);
    const [Buy, setBuy] = useState(false)
    const showNothing = ()=> {
        return(
            <div className='empty'>
                <h2>No products</h2>
            </div>
        )
    }
    const ShowOrders = ()=>{
        let summa = 0
        props.order.forEach(el=>summa += Number.parseFloat(el.price))
        return (
           <div className="OrderShop">
                {props.order.map(el=>
                    <div className='itemShop'  key={el.id}>
                            <div className="itemImgBuy" >
                                <img src={'./img/' + el.img}></img>
                                <div>
                                    <h2>{el.title}</h2>
                                    <b>{el.price}zł</b>
                                </div>
                            </div>
                            <div onClick={()=>props.deleteOrder(el.id)} style={{cursor:'pointer'}}>
                                <>
                                    <MdDeleteForever style={{width: "2em", height:'2em'}}/>
                                </>
                            </div>
                    </div>
                )}
                <div className="summaMain" style={{borderTop:'1px solid black'}}>
                    <p  className='summa'>Summa: {new Intl.NumberFormat().format(summa)}zł</p>
                    <div className="summaBuy" onClick={()=> setBuy(!Buy)}>BUY</div>
                </div>
           </div>
        )
    }
    return(
        <header>
            <div className="Header">
                <span className='logo'>Furniture house</span>
                <ul className='nav'>
                    <li>About</li>
                    <li>Kontact</li>
                    <li>Don't know</li>
                    <div className="Cart"  onClick={()=>setCartOpen(cartOpen = !cartOpen)}> <MdAddShoppingCart 
                    className={`shop-cart-button ${cartOpen && 'active'}`}></MdAddShoppingCart>Cart</div>
                </ul>
                {cartOpen && (
                <div className='shop-cart'>
                    {props.order.length > 0 
                    ? ShowOrders(props) 
                    : showNothing()
                    }    
                </div>
                )}
            </div>
            <MenuHeader></MenuHeader>
        </header>
    )
}
export default HeaderShop