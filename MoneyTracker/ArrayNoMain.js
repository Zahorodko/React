import React, { useEffect, useState } from "react";
import { IncomeExpenses, LiTegs, MainClass, TagsExpenses, UlTegs , InputTags} from "./MoneyTracker.style";
import './MoneyTracker.css'
import { Pie } from "react-chartjs-2";
import {MdDeleteForever} from 'react-icons/md';
import { FaInfo} from 'react-icons/fa';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

    const ArrayNoMain=(props)=>{
        const [ArrayExpensesTwo, setArrayExpensesTwo] = useState(props.ArrayExpenses);
        const sumWithInitial = props.ArrayExpenses.reduce((previousValue, currentValue) => previousValue + Number(currentValue.price), 0);    
        return(
            <>
                <UlTegs>
                {props.ArrayExpenses.map((el, el2)=>
                    <LiTegs key={el.id}> 
                    <div 
                    onClick={()=>props.search(el.id)} 
                    style={{width:'25px',borderRight:"1px solid black" , cursor:'pointer'}}> {el.id}.</div>
                     <div  value={el.price} onChange={(e)=>setArrayExpensesTwo([...ArrayExpensesTwo.map(todo=>todo.id === el.id ? {...todo, price: e.target.value} : todo)])}
                     style={{width: '65px', textAlign:'center', borderRight:"1px solid black"}}
                     >{el.price} zł</div>
                     <div onClick={()=>setArrayExpensesTwo([...ArrayExpensesTwo.map(elem=>elem.id === el.id ? {...elem, info: !el.info} : elem)])} style={{display:'flex',height: '20px'}}> 
                        <p style={{padding:'0 5px', cursor:'default', width:'150px',fontSize:' 0.9em', overflow:'auto'}}>{el.comment}</p>
                        <div style={{    display: 'flex',flexDirection: 'row',alignContent: 'flex-end'}}>
                        <p className="DataChildren">{el.data}</p>
                        <div title='Delete' style={{ height:'20px', padding: '2px 5px 0 5px', cursor:'pointer'}} onClick={()=>props.deletePost(el.id)} className="IconHover"><>
                                    <MdDeleteForever />
                                </></div>
                     </div>
                     </div>
                     </LiTegs>
                )}
                Sum: {sumWithInitial } zł.
                </UlTegs>
          </>
        )
    }
    export default ArrayNoMain