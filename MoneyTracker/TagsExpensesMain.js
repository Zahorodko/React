import React, { useEffect } from "react";
import { TagsExpenses} from "./MoneyTracker.style";
import './MoneyTracker.css'
import {Chart, ArcElement} from 'chart.js'
import ArrayNoMain from "./ArrayNoMain";
Chart.register(ArcElement);

const TagsExpensesMain = (props) => {
    useEffect(()=>
    {props.uniqueTrue ?  <div>{props.unique()}</div> : <div>Hello</div>}
    )
    const elemtrue = false;
    return(
        <div className="MainClassOne">
            <div className="TagsExpensesMain"> 
                {props.uniqueR.map((element)=>
                    <TagsExpenses display={props.ArrayExpenses.filter(el=>el.tags == element.result ).length != 0 ? 'block' : 'none'} key={element.id} className='ArrayMain'>
                        <div className="TitleChildren"> {element.result}</div>
                        <ArrayNoMain 
                        ArrayExpenses={props.ArrayExpenses.filter(el=>el.tags == element.result)}  
                        count={props.count} Summa={props.Summa}  elemtrue={!elemtrue} deletePost={props.deletePost} search={props.search}></ArrayNoMain>                  
                    </TagsExpenses>
                )}
            </div>
        </div>
    )
}
export default TagsExpensesMain