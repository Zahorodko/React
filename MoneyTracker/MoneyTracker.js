import React, { useEffect, useState } from "react";
import { IncomeExpenses, LiTegs, MainClass, TagsExpenses, UlTegs , InputTags} from "./MoneyTracker.style";
import './MoneyTracker.css'
import {Chart, ArcElement} from 'chart.js'
import Add from "./Add";
import AddBudget from "./AddBudget";
import ArrayNoMain from "./ArrayNoMain";
import TagsExpensesMain from "./TagsExpensesMain";
import ArrayMain from "./ArrayMain";
import PieChart from "./PieChart";
Chart.register(ArcElement);

const MoneyTracker=()=>{
    const [Budget, setBudget] = useState({summa:3000, month: 'August'})
    const [ArrayMonth, setArrayMonth] = useState([{}])
    const [count, setCount] = useState(0);
    const [ArrayExpenses, setArrayExpenses] = useState([
        {id:1, title:'food', tags:'food', price: 20, data:'19:11 27/08/2022', bool: false},
        {id:2, title:'food', tags:'food',price: 35, data:'19:11 27/08/2022', bool: false},
        {id:3, title:'chemistry',tags:'chemistry', price: 15, data:'19:11 27/08/2022', bool: false},
        {id:4, title:'chemistry',tags:'chemistry', price: 5, data:'19:11 27/08/2022', bool: false},
        {id:5, title:'holiday',tags:'holiday', price: 500, data:'19:11 27/08/2022', bool: false},
        {id:6, title:'other',tags:'other', price: 15, data:'19:11 27/08/2022', bool: false},
        {id:7, title:'other',tags:'other', price: 14, data:'19:11 27/08/2022', bool: false},
        {id:8, title:'other',tags:'other', price: 123, data:'19:11 27/08/2022', bool: false},
        {id:9, title:'other',tags:'other', price: 123, data:'19:11 27/08/2022', bool: false},
    ])
    const [countID, setCountID] = useState(ArrayExpenses.length+1);
    const [AddTrue, setAddTrue] = useState(false);
    const [sumWithInitial,setsumWithInitial]=useState('')
    const [uniqueR, setUniqueR] = useState([])
    const [uniqueTrue, setUniqueTrue] = useState(true)
    const [AddBud, setAddBud] = useState(false)
useEffect(()=>{
    setsumWithInitial(ArrayExpenses.reduce((previousValue, currentValue) => previousValue + Number(currentValue.price), 0))

})
    function unique(r) {
        let result = [];
        let resultTwo = [];
        for (var i = 0; i < ArrayExpenses.length; i++) {
            if(result.includes(ArrayExpenses[i].tags)){}
            else{
                result.push(ArrayExpenses[i].tags)
                resultTwo.push({result:ArrayExpenses[i].tags, id:result.length})   
            }  
        } 
        if(!result.includes(r) && r != undefined) {
            result.push(r)
            resultTwo.push({result: r, id:result.length})
        }
        setUniqueR(resultTwo)   
        setUniqueTrue(false)
        console.log(r)
    }
    function ArrayMainFunction(e, el){
        setArrayExpenses([...ArrayExpenses.map(todo=>todo.id == el.id ? {...todo, price: e.target.value} : todo)])
    }
    function search(r){
        setArrayExpenses([...ArrayExpenses.map(elem=>elem.id === r ? {...elem, bool: !elem.bool}: {...elem, bool: false})])
    }
    function AddTrueMain(){
        setAddTrue(!AddTrue)
    }
    function Summa(props){
        setBudget(Budget);
        
    }
    function AddExpenses(ValueTags, ValueNumber,ValueComment){
        let da = new Date();
        let years = da.getFullYear();
        let month = da.getMonth()+1;
        let day = da.getDate();
        let hours = da.getHours();
        let minutes = da.getMinutes(); 
        let data = `${hours}:${minutes<10 ? '0'+minutes :minutes} ${day}/0${month}/${years}`;
        if(ValueTags.length !==0){
        let re = {id: countID, title: ValueTags,tags: ValueTags, price: Number(ValueNumber), comment: ValueComment, data: data, info: false, bool: false}
        setArrayExpenses([...ArrayExpenses, re])
        let tt = [...ArrayExpenses, re]
        console.log(tt)
        setsumWithInitial(tt.reduce((previousValue, currentValue) => previousValue + Number(currentValue.price), 0))
        setAddTrue(!AddTrue)
        unique(ValueTags)}
        setCount(count + 1)
        setCountID(countID + 1)
    }
    function AddClose(){
        setAddTrue(!AddTrue)
    }  
    function AddBudgetPlus(el1, el2, el3){
        setBudget({summa:Number(el1)+Number(el2), month: el3})
        setAddBud(!AddBud)
        setArrayExpenses([])
        setCountID(1)
    }
    function BudgetFunction(){
        setAddBud(!AddBud)
    }
    const deletePost = (pos)=>{
        let r = ArrayExpenses.filter( el => el.id !== pos)
        setArrayExpenses(r);
        setsumWithInitial(r.reduce((previousValue, currentValue) => previousValue + Number(currentValue.price), 0))
        setCount(pos);
    }
    function ArrayMonthFunction(){
        setAddBud(!AddBud)
        setArrayMonth([...ArrayMonth, {array: ArrayExpenses, title: Budget.month}])
    }
    let r = [];
    function noNmaR(el){
    r.push(el)
    }
    return(
        <MainClass>
            <div className="TitleMain"> <h1 style={{textShadow: "-3px 4px #565656bf" }}> Money Tracker </h1></div>
            <div className="MainClassOne">
                <div className="IncomeExpensesOne">
                    <IncomeExpenses >
                        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', padding:'10px 0 ', fontSize:'1.2em'}}>
                            <p style={{borderBottom: '1px solid black', padding:' 5px', background:'#c3c3c3'}}>Balance - {Budget.summa} zł {Budget.month}</p>
                            <span style={{marginLeft: '50px', cursor:'pointer', border: '1px solid black', padding:' 5px', background:'#c3c3c3'}} onClick={()=>ArrayMonthFunction()}>Add New mounth</span>
                            {AddBud ? <AddBudget ArrayExpenses={ArrayExpenses} Budget={Budget.summa} AddBudgetPlus={AddBudgetPlus} BudgetFunction={BudgetFunction}></AddBudget> :''}
                        </div>
                        <ArrayMain deletePost={deletePost} count={count} ArrayExpenses={ArrayExpenses} Budget={Budget.summa} Summa={Summa} main={true} ArrayNoMain={ArrayNoMain} sumWithInitial={sumWithInitial} search={search} unique={unique} AddTrueMain={AddTrueMain} ArrayMainFunction={ArrayMainFunction}></ArrayMain>
                    </IncomeExpenses>
                </div>
               <div className="IncomeExpensesOne">
               <PieChart ArrayExpenses={ArrayExpenses} uniqueR={uniqueR}  Summa={Summa} deletePost={deletePost} sumWithInitial={sumWithInitial}  Chart={Chart}  noNmaR={noNmaR} r={r}></PieChart >
               </div>
            </div>
            <TagsExpensesMain uniqueR={uniqueR} uniqueTrue={uniqueTrue} unique={unique} ArrayExpenses={ArrayExpenses} count={count} Summa={Summa} deletePost={deletePost}search={search}></TagsExpensesMain>
            {AddTrue
            ? <Add uniqueR={uniqueR} AddClose={AddClose} AddExpenses={AddExpenses}></Add>
            : ''
            }          
        </MainClass>
    )
}

export default MoneyTracker;