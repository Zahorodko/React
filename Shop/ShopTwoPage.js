import React, { useState } from "react";
import "./ShopP.css"
import { FaShoppingCart } from "react-icons/fa";
import { ShopArray, ShopArrayImg } from "./ShopArray";
import {MdDeleteForever} from 'react-icons/md';
import { IconContext } from "react-icons";
import {BsArrowLeft} from 'react-icons/bs';


const ShopTwoPage = (props) => {
    return(
        <div className="ShopTwoPage">
            <div className="ShopTwoPageMain">
                <div className="ShopTwoPageMainImage">
                    <div className="ShopTwoPageMainImageMain"><img src={'./img/' + ShopArray[3].img}/></div>
                    <div className="ShopTwoPageMainImageNoMain">
                        <img src={'./img/' + ShopArray[3].img}/>
                        <img src={'./img/' + ShopArray[3].img}/>
                    </div>
                    
                </div>
                <div className="ShopTwoPageMainAbout">
                    <div className="Back" onClick={()=>props.ItemOneShowTwo()}> 
                        <IconContext.Provider  value={{width:'40px', height:'100%'}}>             
                            <BsArrowLeft></BsArrowLeft>
                        </IconContext.Provider>
                        <p>Back to main page</p> 
                    </div>
                    <h1>Boxter</h1>
                    <h1>Fotel obrotowy Boxter Signal</h1>
                    <p style={{padding: '20px 0'}}>Fotel obrotowy Boxter, idealnie sprawdzi się zarówno w domu, jak i w biurze, dedykowany jest dla osób spędzających wiele godzin w pozycji siedzącej. Lekko profilowane oparcie dostosowuje się do kształtu pleców wspierając kręgosłup i zapewnia komfort oraz wygodę podczas pracy, komfort użytkowania podnoszą stabilne podłokietniki.</p>
                    <p style={{padding: '20px 0'}}>Fotel został obszyty wysokiej jakości skórą ekologiczną, dodatkowo został wzbogacony ozdobnymi przeszyciami, tył fotela gładki. Fotel posiada wbudowany mechanizm TILT, regulujący wysokość siedziska według własnych wymagań i potrzeb oraz wprowadza w tryb bujania. Maksymalne obciążenie fotela wynosi 120 kg.</p>
                    <p>Dostępne kolory:</p>
                    <ul style={{padding:"20px"}}>
                        <li >biały / czarny</li>
                        <li style={{paddingTop:"10px"}}>czerwony / czarny</li>
                    </ul>
                    <p> <b>Wymiary</b> : wys. 108cm, szer. 65, gł. 46cm, wys. siedziska 45-55cm,</p>
                    <p style={{marginTop:"20px", color:"black"}}>
                        <p >(kliknij) Zobacz inne fotele Signal</p>
                        <p >(kliknij) Zobacz produkt na stronie producenta</p>
                    </p>
                </div>
            </div>
            <div className="ShopTwoPageKontakt">
                <ul>
                    <li style={{padding: '0 0 20px 0'}}>E-mail: biuro@mkmmeble.pl</li>
                    <li style={{border: 'none'}}> 67 343 15 89</li>
                    <li  style={{border: 'none'}}> 519 400 880</li>
                    <li > 519 400 884</li>
                    <p>Ul. Warsztatowa 8, 64-920 Piła</p>
                </ul>
                <ul>
                    <p style={{padding: '0 0 20px 0'}}>LINKI</p>
                    <li>Meble</li>
                    <li>Pomieszczenia</li>
                    <li>Producenci</li>
                    <li>Sklep online</li>
                    <li>Promocje</li>
                    <li>Meble od ręki</li>
                </ul>
                <ul>
                    <p style={{padding: '0 0 20px 0'}}>KUP ONLINE</p>
                    <li>Materace</li>
                    <li>Stelaże do łóżek</li>
                    <li>Poduszki</li>
                    
                </ul>
                <ul>
                    <p style={{padding: '0 0 20px 0'}}>WAŻNE LINKI</p>
                    <li>Polityka prywatności</li>
                    <li>Koszty dostawy</li>
                    <li>Zakupy na raty</li>
                    <li>Konfigurator szaf</li>
                </ul>
            </div>
            <div className="ShopTwoPageFooter">
                <p>Copyright 2022 © <b> MKM Meble SP. Z O.O.</b></p>
            </div>
        </div>
    )
}
export default ShopTwoPage;