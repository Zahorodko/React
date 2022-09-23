import React, { useState } from "react";

import './MoneyTracker.css'

function AddBudget(props){  
    const [ArrayExpensesTwoB, setArrayExpensesTwoB] = useState(props.ArrayExpenses);
    const [ValueAddBudget, setValueAddBudget] = useState('');
    const [ValueAddMounth, setValueAddMounth] = useState('');
    const sumWithInitialTwo = ArrayExpensesTwoB.reduce((previousValue, currentValue) => previousValue + Number(currentValue.price), 0);   
    let summ = props.Budget - sumWithInitialTwo;
    return(
        <div className='AddMoneyMain'>
            {console.log(sumWithInitialTwo)}
            <h1 className="AddMoneyMainTitle">Add new purchase</h1>
            <div className='AddMoney'>
                <input type='number'
                 style={{width: '200px', height: '30px', fontSize: '1em', padding: '5px'}}
                value={ValueAddBudget}
                placeholder="Summa"
                onChange={(e)=> setValueAddBudget(e.target.value)}
                ></input>
                <input type='text'
                 style={{width: '200px', height: '30px', fontSize: '1em', padding: '5px'}}
                value={ValueAddMounth}
                placeholder="Month"
                onChange={(e)=> setValueAddMounth(e.target.value)}
                ></input>
                  <div className="ButtonAdd">   
                   <button className="SaveArrayMain" onClick={()=>props.BudgetFunction()}>Close</button>
                <button className="SaveArrayMain" onClick={()=>props.AddBudgetPlus(ValueAddBudget, summ,ValueAddMounth)}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default AddBudget