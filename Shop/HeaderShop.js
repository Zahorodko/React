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
                {Buy
                ? <div className="Buy">
                    <div className="RegisterNew">
                        <form action="/action_page.php">
                            <label className="FormLabel" for="fname">First name:</label><br/>
                            <input className="FormInputBuy" type="text" id="fname" name="fname" /><br/>
                            <label className="FormLabel" for="lname">Last name:</label><br/>
                            <input className="FormInputBuy" type="text" id="lname" name="lname" /><br/>
                            <label className="FormLabel" for="birthday">Birthday:</label><br/>
                            <input className="FormInputBuy" type="date" id="birthday" name="birthday"/><br/>
                            <label className="FormLabel" for="email">Enter your email:</label><br/>
                            <input className="FormInputBuy" type="email" id="email" name="email"/><br/>
                            <label className="FormLabel" for="phone">Enter your phone number:</label><br/>
                            <input className="FormInputBuy" type="number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/><br/>
                            <label className="FormLabel" for="phoCityne">City:</label><br/>
                            <input className="FormInputBuy" id="City" type="text"/><br/>
                            <label className="FormLabel" for="Address">Address:</label><br/>
                            <input className="FormInputBuy" id="Address" type="text"/><br/>
                            <input type="submit" value="Buy"/>
                            <input type="reset"/>
                        </form>
                        <button onClick={()=> setBuy(!Buy)}>Close</button>
                    </div>
                </div>
                : false
                }
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