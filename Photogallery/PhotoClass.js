import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoClass = (props) => {
    const [ClickImg, setClickImg] = useState(false)
    return(
        <div className='Photo'>
            <img id='PhotoBlur' onClick={()=>props.HideImg()} src={props.currentItems[props.imageM].image}></img>      
            <div className='left' onClick={()=>props.ImageK(1)}></div>
            <div className='PhotoMain'>
                <img onClick={()=>setClickImg(!ClickImg)} src={props.currentItems[props.imageM].image} className={ClickImg?'ClickImg':''}/>
                <a className='download' href={props.currentItems[props.imageM].image} download>download</a>                   
                <div className='download' style={{right: '0'}} onClick={()=>props.chooseCategory == 'all' ? props.DeleteImageMini(props.currentItems[props.imageM]) : props.DeleteImageMiniFilter(props.currentItems[props.imageM])}>delete</div>                   
            </div>
            <div className='tagsImage'><p style={{textDecoration:'underline'}}>Tags image:</p> <p style={{textTransform:'capitalize', textAlign:'center',color: 'red'}}>{props.currentItems[props.imageM].tegs}</p> 
            </div>
            <div className='right' onClick={()=>props.ImageK(2)}></div>               
        </div>
    )
}

export default PhotoClass