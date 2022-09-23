
const DictionaryWordLeft = (props) => {
    return(
        <div className='DictionaryWordLeft'>
            <div className="TwoBlockResult">
                <p className="TwoBlockResultOne" >Best result in tests</p> 
                <p className="TwoBlockResultTwo" >{props.RatingZero} from {props.RatingOne}</p> 
            </div>
            <div className="TwoBlockResult" >
                <p className="TwoBlockResultOne" >Best Score in Grammar</p> 
                <p className="TwoBlockResultTwo" >{props.RatingWrite}</p> 
            </div>
            <div className="TwoBlockResult" >
                <p className="TwoBlockResultOne" >Number of words in the dictionary</p> 
                <p className="TwoBlockResultTwo" >{props.stateArrlength}</p> 
            </div>
        </div>
    )
}
export default DictionaryWordLeft;