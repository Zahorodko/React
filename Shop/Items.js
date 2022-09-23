import React, { useState } from "react";
import "./ShopP.css"
import { IconContext } from "react-icons";
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Items = (props) => {
    return (
        <main>
            {props.items.map(el => (
                <div className='itemShop' key={el.id}>
                    <img src={'../img/' + el.img} onClick={()=>props.ItemOneShow(el)}/>
                    <div>
                        <h2 onClick={()=>props.ItemOneShow(el)}>{el.title}</h2>
                        <p onClick={()=>props.ItemOneShow(el)}>{el.desc}</p>
                        <div className="ItemFooter">
                            <div className="Price">{el.price} zł</div>
                            <div className="add-to-card" onClick={()=>{props.addToOrder(el);props.setItemsTrueBuyFunction(props.ItemsTrueArray)}}>
                            <IconContext.Provider  value={{className:"addCard", textShadow:'10px 10px 0 black', boxShadow:'0 0 10px 10px black'}}>             
                                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            </IconContext.Provider>
                            <IconContext.Provider  value={{className:"addCardTwo", textShadow:'10px 10px 0 black', boxShadow:'0 0 10px 10px black'}}>             
                                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            ))}  
        </main>
    ) 
}
export default Items