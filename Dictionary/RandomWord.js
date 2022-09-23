import React ,{ useEffect, useState } from 'react'
import './Dictionary.css'

const RandomWord = (props) => {
    const [ numbers, setNumbers ] = React.useState(0);
    const [ numbers1, setNumbers1 ] = React.useState(0);
    const [ numbers2, setNumbers2 ] = React.useState(0);
    const [ numbers3, setNumbers3 ] = React.useState(0);
    const [ correct, setCorrect] = React.useState(0);
    const [ CorrectWrite, setCorrectWrite] = useState(0);
    const [ loser, setLoser] = React.useState(-1);
    const [Game, setGame] = useState(false)
    const [GameWrite, setGameWrite] = useState(false)

    const add = (e) => {
        const ArrayL = props.stateArr.length;
        setNumbers(getRandomNumber(0,ArrayL));
        setNumbers1(getRandomNumber(0,ArrayL));
        setNumbers2(getRandomNumber(0,ArrayL));
        setNumbers3(getRandomNumber(0,ArrayL));
        if(e.target.innerText===props.stateArr[numbers].body){
            setCorrect(correct + 1)
        }
        setLoser(loser+1)
    };
    const ArNum=[
        props.stateArr[numbers].body, 
        props.stateArr[numbers1].body, 
        props.stateArr[numbers2].body,
        props.stateArr[numbers3].body
    ]
    const numbersR = []
    const getRandomNumber = (min, max) => {
        const number = Math.floor(min + Math.random() * (max - min))
        if (numbersR.includes(number)) return getRandomNumber(min, max)
        else {
            numbersR.push(number)
            return number
        }
    }
    function StartGameFunc(e){
        add(e)
        setGame(!Game)
    }
    function StartGameWriteFunc(e){
        setGameWrite(!GameWrite)
        let ArrayWrite = props.stateArr.length;
        setNumbers(getRandomNumber(0,ArrayWrite));
    }
    function StartGameWriteNext(e){
        if(GameWriteInput.toLowerCase() == props.stateArr[numbers].title.toLowerCase()){
            let ArrayWrite = props.stateArr.length;
            setCorrectWrite(CorrectWrite + 1)
            setNumbers(getRandomNumber(0,ArrayWrite));
            setGameWriteInput('')
        }
        else{
            setGameWriteInput('')
            setCorrectWrite(0)
        }
        setGameWriteHelp('')
    }
    function StartGameWriteHelp(){
        setGameWriteHelp(props.stateArr[numbers].title)
        setCorrectWrite(0)
    }
    function StartGameWriteHelpTrue(){
        let r = props.stateArr[numbers].title;
        let y = GameWriteHelp.length;
        let t = r[y];
        if(y==r.length-2)setCorrectWrite(0)
        if(y<r.length) setGameWriteHelp(GameWriteHelp+t);
    }
    const [GameWriteInput, setGameWriteInput] = useState('')
    const [GameWriteHelp, setGameWriteHelp] = useState('')
    function ExitGameFunc(){
        setCorrect(0)
        setLoser(-1)
        setGame(!Game)
    }
    function ExitGameWriteFunc(){
        setGameWrite(!GameWrite)
        setGameWriteInput('')
        setCorrectWrite(0)
        setGameWriteHelp('')
    }
    useEffect(()=>{
            document.onkeydown=(e)=>{
                if(e.key == 'Enter'){
                if(GameWrite==true){
                    StartGameWriteNext()
                }}
            }
    })
    return(
        <div className='ClassGame'>
            <div id='random'>
                <button className='StartGame' onClick={(e)=>StartGameFunc(e)}>Start test</button>
                {Game
                ? <div className='Loteria'>
                    <div className='LoteriaTop' >  
                        <h1>My dictionary</h1> 
                        <div onClick={()=>(ExitGameFunc(),props.Rating(correct,loser))} className='ExitGame'>Exit</div>
                    </div>
                    <div className='non'>
                        <div className='Correct'> <p>Correct translation: {correct}</p> <p>Number of attempts: {loser}</p>  </div>
                        <p style={{color:'rgb(120, 120, 120)',fontSize:'1.6em'}}>Choose the correct translation</p>
                            <div className='wordMain'> {props.stateArr[numbers].title}</div>
                            <div >
                                <ul id='randArO'>
                                    <li className='randAr' onClick={add}>{ArNum[getRandomNumber(0, 4)]}</li>
                                    <li className='randAr' onClick={add}>{ArNum[getRandomNumber(0, 4)]}</li>
                                    <li className='randAr' onClick={add}>{ArNum[getRandomNumber(0, 4)]}</li>
                                    <li className='randAr' onClick={add}>{ArNum[getRandomNumber(0, 4)]}</li>
                                </ul>
                            </div>
                    </div>
                </div>
                : false
                }
            </div>
            <div id='GameWrite'>
                <button className='StartGameWrite' onClick={(e)=>StartGameWriteFunc(e)}>Start write</button>
                {GameWrite
                ? <div className='Loteria'>
                        <div className='LoteriaTop' >  
                            <h1>My dictionary</h1> 
                            <div onClick={()=>(ExitGameWriteFunc(),props.RatingWriteFunc(CorrectWrite))} className='ExitGame'>Exit</div>
                        </div>
                        <div className='non'>
                        <p>Correct: {CorrectWrite}</p>
                        <p style={{color:'rgb(120, 120, 120)',fontSize:'1.6em'}}>Write the correct translation</p>
                            <div className='wordMain'>{props.stateArr[numbers].body}</div>
                            <div className='CorrectWriteGame'>
                            <input type='text' value={GameWriteInput} onChange={(e)=>setGameWriteInput(e.target.value)} placeholder={GameWriteHelp}></input>
                                <div className='NonButton' >
                                    <div className='CorrectWriteGameButtonOne' onClick={()=>StartGameWriteHelp()}>Don't know</div>
                                    <div className='CorrectWriteGameButtonOne' onClick={()=>StartGameWriteHelpTrue()}>Help</div>
                                    <div className='CorrectWriteGameButtonOne' onClick={()=>StartGameWriteNext()}>Enter</div>                    
                                </div>
                            </div>
                        </div>
                    </div>
                    : false
                }
                </div>
        </div>
    )
}
export default RandomWord;