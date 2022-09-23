import React from "react";
import './MoneyTracker.css'
import { Pie } from "react-chartjs-2";

const colorBack = ["#2FDE00", "#00A6B4", "#ff6600",'red','blue', 'green']
const Chart = (props) => {
     const pieChartData = { 
       datasets: [{
           data: props.w.filter((e,i)=>!(i%2)),
           backgroundColor: colorBack,
           hoverBackgroundColor: ["#175000", "#003350", "#993d00","#993d00"],
           border: "1px solid black"
       }]
     };
     const pieChart = (
       <Pie
         type="pie"
         width={130}
         height={50}
         options={{
           title: {
             display: true,
             text: "COVID-19 Cases of Last 3 Months",
             fontSize: 5
           },
           legend: {
             display: true, //Is the legend shown?
             position: "top" //Position of the legend.
           },
           animation: {animateRotate:false}
         }}
         data={pieChartData}
       />
     );
     return pieChart;
   };
  function PieChart(props){
    function ArrayNoMainCh(props){
      const sumWithInitial = props.ArrayExpenses.reduce((previousValue, currentValue) => previousValue + Number(currentValue.price), 0);    
      props.noNmaR(Math.round((sumWithInitial*100/props.sumWithInitial)*100)/100)
      let tit = Math.round((sumWithInitial*100/props.sumWithInitial)*100)/100
      return(
          <div className="ChartChildTwo">
              <div style={{borderLeft: '1px solid black', width: '50%', textAlign:'center'}}>{sumWithInitial}zł</div>
              <div style={{borderLeft: '1px solid black', width: '50%', textAlign:'center'}}>{tit}%</div>
          </div>
      )
    }
    return(
      <div className="Chart">
        <div className="Statistics">Statistics</div>
        <div style={{display:'flex',width: '100%', alignItems: 'center'}}>
          <div className="ChartMain">
            {props.uniqueR.map((element)=>
              <div key={element.id} className='ChartChild'>
                {props.ArrayExpenses.filter(el=>el.tags == element.result).length!==0
                ? <>
                <div style={{width:'55%', padding:'0 3%', overflow:'hidden'}}>{element.result}</div>
                <ArrayNoMainCh 
                ArrayExpenses={props.ArrayExpenses.filter(el=>el.tags == element.result)}  
                Summa={props.Summa} elemtrue={true} deletePost={props.deletePost} sumWithInitial={props.sumWithInitial} noNmaR={props.noNmaR}></ArrayNoMainCh>  
                <div style={{borderLeft: '1px solid black', width: '10%', textAlign:'center', backgroundColor:colorBack[element.id-1]}}></div>
                </>
                : false
                }
              </div>
            )}
          </div>
          <div style={{width:'50%'}}>
          <Chart w={props.r}></Chart>
          </div>       
        </div>
      </div>
    )
  }
export default PieChart