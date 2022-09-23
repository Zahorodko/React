import React, { useState } from "react";
import "./ShopP.css"
import { ShopArray } from "./ShopArray";
import ShopTwoPage from './ShopTwoPage'
import HeaderShop from './HeaderShop'
import Categories from './Categories'
import Items from './Items'
import { MainShop } from "./Shop.style";
import { Presentation } from "./Shop.style";

const Shop = () => {
    const [currentItems, setCurrentItems] = useState(ShopArray)
    const [order, setOrder] = useState([])
    const [ItemsTrue, setItemsTrue] = useState(false)
    const [ItemsTrueArray, setItemsTrueArray] = useState('')
    const [ItemsTrueBuy, setItemsTrueBuy] = useState(false);

    function ItemOneShow(el){
        setItemsTrue(!ItemsTrue)
        setItemsTrueArray(el)
        window.scrollTo(0, 0)
    }
    function ItemOneShowTwo(){
        setItemsTrue(!ItemsTrue)
    }
    function deleteOrder(id){
        setOrder([...order.filter(el=>el.id !== id)]) 
    }
    function chooseCategory(category){
        if(category==='all'){
            setCurrentItems(ShopArray)
        }
        setCurrentItems(ShopArray.filter(el=>el.category === category))
    }
    function addToOrder(item){
        setOrder([...order,{id: order.length+1, title: item.title,img: item.img, desc: item.desc,category: item.category, price: item.price}])
    }
    function setItemsTrueBuyFunction(){
        setItemsTrueBuy(!ItemsTrueBuy)
    }
    return(
        <MainShop>
             <HeaderShop order={order} deleteOrder={deleteOrder}></HeaderShop>
             {ItemsTrue
                ? <ShopTwoPage ItemOneShowTwo={ItemOneShowTwo}></ShopTwoPage>
                : <div>
                    <Presentation></Presentation>
                    <Categories chooseCategory={chooseCategory}></Categories>
                    <Items  items={currentItems} addToOrder={addToOrder} setItemsTrueBuyFunction={setItemsTrueBuyFunction} ItemsTrueBuy={ItemsTrueBuy} ItemsTrueArray={ItemsTrueArray} ItemOneShow={ItemOneShow}></Items>
                    {ItemsTrueBuy ? <div className="Addbasket" onClick={()=> setItemsTrueBuyFunction()}> <p>The product has been added to the cart. Thanks.</p>  </div> : false}
                </div>
             }
        </MainShop>
    )
}
export default Shop