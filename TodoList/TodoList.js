import React,{ useState } from 'react';
import './TodoList.css';
import { Todo, TodoMain } from './TodoList.style';
import TagsForm from './TegsForm';
import { Context } from './TodoListContext';
import { CriateList } from './CriateList';
import { TodoResult } from './TodoResult';

const TodoList = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);
    const [BackColor, setBackColor] = useState(['red', '#38a581', 'blue', 'DarkOrchid', 'DarkViolet','ForestGreen','#a17812','IndianRed','#a800a8','MediumSeaGreen','SteelBlue']);

    const deletePost = (pos)=>{
        setTodo(todo.filter( el => el !== pos)); 
       if(pos.count===false && count>0)setCount(count-1)
    }
    const okey=(el)=>{
        let r=0;
        for(let i=0;i<todo.length;i++){if(todo[i].count===false){r++}} 
        setTodo([...todo.map(todo=>todo.id === el.id ? {...todo, count: !el.count} : todo)])
        if(!el.count===false){r++}
        else{r--};
        if(count>=0)setCount(r)
    }
    const Addlist=(value)=>{
        setTodo([...todo, {id:Date.now(), title:value, color:BackColor[Math.floor(Math.random() * (BackColor.length - 0 + 1)) + 0], count: true}])
    }
    return(
        <Context.Provider value={{okey, deletePost,Addlist}}>
            <TodoMain>
                <Todo>
                    <h1>What's the plan for today?</h1>
                    <TagsForm></TagsForm>
                    <TodoResult todo={todo} count={count}></TodoResult>
                    <CriateList todoA={todo}></CriateList>
                </Todo>
            </TodoMain>
        </Context.Provider>
    )
}
export default TodoList