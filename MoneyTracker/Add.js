import React, { useState } from "react";
import './MoneyTracker.css'

function Add(props){
    const [ValueTags, setValueTags] = useState('');
    const [ValueNumber, setValueNumber] = useState('');
    const [ValueComment, setValueComment] = useState('');
    return(
        <div className='AddMoneyMain'>
            <h1 className="AddMoneyMainTitle">Add new purchase</h1>
            <div className='AddMoney'>
                <input className="inputAdd"
                type='text' value={ValueTags} onChange={(e)=>setValueTags(e.target.value)} placeholder="Tegs"></input>
                <select className="SelectStyle"
                value={ValueTags}
                size="1" form='true' onChange={(e)=>setValueTags(e.target.value)}>
                <option value={ValueTags} disabled >Choose a tag</option>
                    {props.uniqueR.map((el)=>
                        <option key={el.id}>{el.result}</option>
                    )}
                </select>       
                <input
                style={{width: '200px', height: '30px', fontSize: '1em', padding: '5px'}}
                type='number' value={ValueNumber} onChange={(e)=>setValueNumber(e.target.value)} placeholder="Summa"></input>
                <input type='text' value={ValueComment} onChange={(e)=>setValueComment(e.target.value)} placeholder="Description"
                style={{width: '200px', height: '30px', fontSize: '1em', padding: '5px'}}
                ></input>
                <div className="ButtonAdd">
                <button className="SaveArrayMain" onClick={()=>props.AddExpenses(ValueTags, ValueNumber,ValueComment)}>Save</button>
                <button className="SaveArrayMain" onClick={()=>props.AddClose()}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default Add