import React, { useState } from "react";
import { LiTegs, UlTegs , InputTags} from "./MoneyTracker.style";
import './MoneyTracker.css'
import {MdDeleteForever} from 'react-icons/md';
import { FaInfo} from 'react-icons/fa';

const ArrayMain=(props)=>{
    const [ArrayExpensesTwo, setArrayExpensesTwo] = useState(props.ArrayExpenses); 
    let summ = props.Budget - props.sumWithInitial;
    return(
        <div>
            <UlTegs>       
                {props.ArrayExpenses.map((el,el2)=>
                    <LiTegs backgroundColor={'#dfb3b3'} key={el.id} 
                    style={{border: el.bool ? '1px solid #ef5a5a' : '' }}> 
                        <div style={{ width: '75%',padding:' 0 10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  cursor:'pointer'}} onClick={()=>props.search(el.id)}>{el2+1}. {el.title} 
                        <div >{'('+ el.id +')'} </div> 
                    </div>
                    <InputTags className='InputTags' type='number' value={el.price} onChange={(e)=>props.ArrayMainFunction(e, el)}>    
                    </InputTags>
                    <div title='Delete' className="IconHover" style={{padding: '2px 5px 0 5px', cursor: 'pointer'}} onClick={()=>props.deletePost(el.id)}> 
                        <>
                            <MdDeleteForever />
                        </>
                    </div>
                    <div title="Info" className="IconHover" onClick={()=>setArrayExpensesTwo([...ArrayExpensesTwo.map(elem=>elem.id === el.id ? {...elem, info: !el.info} : elem)])}>
                        {el.info 
                            ?   <p style={{ display: 'flex',  flexDirection: 'row', position: 'relative'}} >
                                    <p style={{padding:'0 5px', cursor: 'pointer'}}>
                                        <>
                                            <FaInfo  style={{height: '0.8em'}}/>
                                        </>
                                    </p> 
                                    <p style={{position:'absolute', left:'100%',margin:' 0 5px', background: '#242424',color: 'white',padding: '0 5px', width:'10vw'}}>{el.comment}<br/>{el.data}</p>
                                </p> 
                            :   <div style={{padding:'0 5px', cursor:'pointer'}}>
                                    <>
                                        <FaInfo style={{height: '0.8em'}}/>
                                    </>
                                </div>
                        }
                    </div>
                    </LiTegs>
                )}   
            </UlTegs>
            Sum: {props.sumWithInitial} zł.
            {isNaN(summ) ? '' : <p>Balance: {summ} zł.</p> }
            <div className="Button1">
                <button className="SaveArrayMain" onClick={()=>{props.unique(); props.AddTrueMain()}}>Add</button>
                {props.main
                ? <button className="SaveArrayMain" onClick={()=>props.Summa()}>Save</button>
                : ''
                }            
            </div>
        </div> 
    )
}
export default ArrayMain