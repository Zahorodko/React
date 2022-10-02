import React from 'react';
import './PhotoGallery.css';
import { IconContext } from "react-icons";
import {BsCloudDownload} from 'react-icons/bs';

const DragDropFilter = (props) => {
    return(
        props.currentItems.filter(el => el.tegs == props.chooseCategory).sort(props.sortCards).map((el)=>
        <div className={'divKey'+el.id} key={el.id}>
            <img 
            onDragStart={e=>props.dragStartHandler(e,el)}
            onDragLeave={e=>props.dragLeaveHandler(e)}
            onDragEnd={e=>props.dragEndHandler(e)}
            onDragOver={e=>props.dragOverHandler(e)}
            onDrop={e=>props.dropHandler(e,el)}
            draggable={true}
            src={el.image} 
            onClick={(e)=>{{props.AddPhotoTrue ? props.DragFunctionFilter(el) : props.thisImageFilter(el,e)}}}/> 
            <button className="DivKeyDelete" onClick={()=>props.DeleteImageMiniFilter(el)} title='Delete'>x</button>
            <a onClick={()=>props.thisImageMiniFilter(el)} className='downloadMini' href={props.currentFilter[props.imageM].image} download>                                
            <IconContext.Provider value={{width:'40px', cursor:'pointer'}}>             
                <BsCloudDownload  title='Download' />
            </IconContext.Provider>
            </a> 
        </div>
        ) 
    )
}

export default DragDropFilter