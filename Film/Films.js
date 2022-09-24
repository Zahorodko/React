import React, { useState } from "react";
import FifthBlock from "./FifthBlock";
import "./Films.css"
import FirstBlock from "./FirstBlock";
import FourthBlock from "./FourthBlock";
import LastBlock from "./LastBlock";
import Questions from "./Question";
import SecondBlock from "./SecondBlock";
import SeventhBlock from "./SeventhBlock";
import ThirdBlock from "./ThirdBlock";

const Films = () => {
    const [Count, setCount] = useState('0')
    function Zero(el){
        if(Count==el){setCount(0)}
        else{setCount(el)}
    }
    return(
        <div className="FilmsMain">
            <FirstBlock></FirstBlock>
            <SecondBlock></SecondBlock>
            <ThirdBlock></ThirdBlock>
            <FourthBlock></FourthBlock>
            <FifthBlock></FifthBlock>            
            <Questions Zero={Zero} Count={Count}></Questions>
            <SeventhBlock></SeventhBlock>
            <LastBlock></LastBlock>
        </div>
    )
}
export default Films