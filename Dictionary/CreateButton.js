import React ,{ useEffect, useState } from 'react'
import './Dictionary.css'
import { IconContext } from "react-icons";
import {MdDeleteOutline} from 'react-icons/md';
import { BiSearchAlt2} from 'react-icons/bi';
import { IoCopyOutline } from "react-icons/io5";
import RandomWord from './RandomWord';
import DictionaryWordLeft from './DictionaryWordLeft';

function CreateButton(props){
    const [Rating,setRating]=useState([0, 0])
    const boolF = () =>{
        setBool(prevState => !prevState);
    {bool ? opaci() : opaci2()}
    }
    const [bool, setBool] = useState(true);
    const opaci = ()=>{
        const nodeList = document.querySelectorAll(".dictionary div:nth-child(3)");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.color = "transparent";
        };
    }   
    const opaci2 = () => {
        const nodeList = document.querySelectorAll(".dictionary div:nth-child(3)");
        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].style.color = "#3e3e3e";
        }
    }   
    const handleCopyTwo = (el) =>{
        window.open('https://www.google.com/search?q=What+is+the+actual+meaning+of+%22'+el+'%22&oq=What+is+the+actual+meaning+of+%22'+el+'%22&aqs=chrome..69i57j0i22i30l3.663j0j7&sourceid=chrome&ie=UTF-8', '', 'width=1000');
    }
    const handleCopyOne = (el) =>{
        let copyText = el;
        navigator.clipboard.writeText(copyText);
    }
    const opacit = (op) =>{
        let opa = op+2;
        let p = document.querySelector('.dictionary:nth-child('+opa+') div:nth-child(3)');
        p.style.color = '#3e3e3e';
    }
    function RatingFunc(el1, el2){
        let r = [el1, el2];
        let newRating = (el1/el2)*100;
        let oldRating = (Rating[0]/Rating[1])*100;
        if(Rating[0]==0 && Rating[1]==0)setRating(r)
        if(el1<=props.stateArr.length){
            if(newRating>oldRating || (el1==el2&&el2>Rating[1])) setRating(r)
        }
        if(el1>props.stateArr.length){setRating([props.stateArr.length,props.stateArr.length])}
    }
    return (
        <div className='TwoBlock'>
            <DictionaryWordLeft RatingZero={Rating[0]} RatingOne={Rating[1]} RatingWrite={props.RatingWrite} stateArrlength={props.stateArr.length}></DictionaryWordLeft>
            <div className='DictionaryWord'>
                <div className='dictionaryZero'>
                    <div className='dictionaryFirst'>
                        <p>Number</p>
                        <p>English</p>
                        <p onClick={()=>{boolF()}} title='hide translation' style={{cursor: 'pointer'}}>Translate</p>
                    </div>
                    {props.filterC.map((el,el2) => 
                        <div className='dictionary' key={el2}>
                            <div className='number'>{el2+1}</div>
                            <div className='english'>
                                {el.title}
                                <div style={{display:'flex', width:'45px',justifyContent: 'flex-end'}}>
                                </div> 
                            </div>
                            <div className='ghost' onClick={()=>{opacit(el2)}}>{el.body}</div>
                            <IconContext.Provider value={{className: "global-class-name", width:'30px', cursor:'pointer' }}   >
                                <div>
                                    <BiSearchAlt2 title='Search'  onClick={()=>{handleCopyTwo(el.title)}}/>
                                </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "global-class-name", width:'30px', cursor:'pointer' }}   >
                                <div>
                                    <IoCopyOutline title='Copy'  onClick={()=>{handleCopyOne(el.title)}}/>
                                </div>
                            </IconContext.Provider>
                            <div>
                                <IconContext.Provider value={{className: "global-class-name", width:'40px', cursor:'pointer' }}   >
                                    <div>
                                        <MdDeleteOutline  title='Delete' onClick={()=>{props.delete(el)}}/>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    )}
                </div> 
            </div>
            <div className='DictionaryWordLeft'> 
                <RandomWord stateArr={props.stateArr} Rating={RatingFunc} RatingWriteFunc={props.RatingWriteFunc}></RandomWord>
            </div>
        </div>
    )
}
export default CreateButton;