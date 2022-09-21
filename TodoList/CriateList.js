import React,{ useState, useContext,useCallback } from 'react';
import './TodoList.css';
import { Context } from './TodoListContext';
import { IconContext } from "react-icons";
import {MdDeleteForever} from 'react-icons/md';

export const CriateList = (props) => {
    const {okey, deletePost} =useContext(Context)
    return(
        <div>
            {props.todoA.map((el)=>
                <div className={'todomap hi'+ el.id} style={{background:`${el.color}`}}  key={el.id}>
                    <div className={el.count? 'todomapInside' : 'todomapInside okey'} >
                        <div onClick={()=>okey(el)} id='todotitle' className={el.title} >{el.title}</div>
                        <div className='delete' onClick={()=>deletePost(el)}>
                            <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
                                <>
                                    <MdDeleteForever />
                                </>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

