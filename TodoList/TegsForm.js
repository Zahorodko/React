import React,{ useState, useContext,useCallback } from 'react';
import './TodoList.css';
import { Context } from './TodoListContext';

const TagsForm = () => {
    const [value, setValue] = useState('');
    const {Addlist} =useContext(Context)
    function Zero(){
        Addlist(value)
        setValue('')
    }
    return(
        <form className='formclass'>
            <input className='inputclass' 
            type='text'
            value={value}
            onChange={e =>setValue(e.target.value)}
            ></input>
            <div className='inputclassbutton' onClick={()=>Zero()}>Add list</div>
        </form>
    )
}
export default TagsForm