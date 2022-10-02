import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';
import { photo, photoTwo } from './PhotoGalleryArray';
import TagsFolder from './TagsFolder';
import PhotoClass from './PhotoClass';
import DragDrop from './Drag&Drop';
import DragDropFilter from './Drag&DropFilter';

const PhotoGallery = () =>{
    const [arrayphoto, setArrayphoto] = useState(photo)
    const [arrayphotoTwo, setArrayphotoTwo] = useState(photoTwo)
    const [imageM, setImageM]=useState(0);
    const [PhotoSee, setPhotoSee] = useState(false);
    const [PhotoSeeFilter, setPhotoSeeFilter] = useState(false);
    const [PhotoSeeCheck, setPhotoSeeCheck] = useState('');
    const [currentItems, setCurrentItems] = useState(arrayphoto);
    const [countAdd, setCountAdd] = useState(40);
    const [photoTwoTrue, setPhotoTwoTrue] = useState(false);
    const [currentFilter, setCurrentFilter] = useState([]);
    function funcref(){      
        setPhotoTwoTrue(true)
        setCurrentItems(arrayphotoTwo);
        setImageM(0)
    }
    function CreateTags(InputAddTags){
        setArrLi([...ArrLi, {id:ArrLi.length+1, title: InputAddTags}])
    }
    function addImg(inputAddTwo,inputAddOne){
        setCountAdd(countAdd+1);      
        if(photoTwoTrue){
        setArrayphotoTwo([...arrayphotoTwo, {id: countAdd+1, order: countAdd+1, tegs: inputAddOne, image: inputAddTwo, style: "red"}]);
        setCurrentItems([...currentItems, {id: countAdd+1,order: countAdd+1, tegs: inputAddOne, image: inputAddTwo, style: "red"}]);
        }        
        else{
            setArrayphoto([...arrayphoto, {id: countAdd+1, order: countAdd+1, tegs: inputAddOne, image: inputAddTwo, style: "red"}])
            setCurrentItems([...currentItems, {id: countAdd+1,order: countAdd+1, tegs: inputAddOne, image: inputAddTwo, style: "red"}]);
        }
    }
    function onClickCheck(){
        {AddPhotoInFolder.title=='All'
        ? setArrayphoto(arrayphoto.concat(AddPhotoArray))
        : setArrayphotoTwo(arrayphotoTwo.concat(AddPhotoArray))
    }
        CloseAddInFolder()
    }
    function ChooseCategoryFunction(el){
        setCurrentFilter(currentItems.filter(elem => elem.tegs == el.title))
        setChooseCategory(el.title)
        setImageM(0)
        if(el.title!=='all'){setPhotoSeeFilter(true)}         
    }
    function setAddPhotoInFolderFu(el){
        setAddPhotoInFolder(el)
    }
    function setAddPhotoInFolderTrueFunction(){
        setAddPhotoInFolderTrue(!AddPhotoInFolderTrue)
    }

    function thisImage(el){
        let r1 = document.querySelectorAll('.Gallery div');
        for (let i = 0; i < r1.length; i++) {
            r1[i].style.border='2px solid transparent';
        }
        const names = currentItems.map(el => el.id);
        let r = names.indexOf(el.id);
        setImageM(r);
        let r2 = document.querySelector('.divKey'+el.id);
        r2.style.border='2px solid red';
        if(el==PhotoSeeCheck){setPhotoSee(false); setPhotoSeeCheck('')}
        else if(el!==PhotoSeeCheck){setPhotoSee(true); setPhotoSeeCheck(el)}
    }
    function thisImageFilter(el){
        let r1 = document.querySelectorAll('.Gallery div');
        for (let i = 0; i < r1.length; i++) {
            r1[i].style.border='2px solid transparent';
        }
        const names = currentFilter.map(el => el.id);
        let r = names.indexOf(el.id);
        setImageM(r);
        let r2 = document.querySelector('.divKey'+el.id);
        r2.style.border='2px solid red';
        if(el==PhotoSeeCheck){setPhotoSee(false); setPhotoSeeCheck('')}
        else if(el!==PhotoSeeCheck){setPhotoSee(true); setPhotoSeeCheck(el)}    
    }
    function thisImageMini(el){
        let r1 = document.querySelectorAll('.Gallery div');
        for (let i = 0; i < r1.length; i++) {
            r1[i].style.border='2px solid transparent';
        }
        const names = currentItems.map(el => el.id);
        let r = names.indexOf(el.id);
        setImageM(r);
        let r2 = document.querySelector('.divKey'+el.id);
        r2.style.border='2px solid red';
    }
    function thisImageMiniFilter(el){
        let r1 = document.querySelectorAll('.Gallery div');
        for (let i = 0; i < r1.length; i++) {
            r1[i].style.border='2px solid transparent';
        }
        const names = currentFilter.map(el => el.id);
        let r = names.indexOf(el.id);
        setImageM(r);
        let r2 = document.querySelector('.divKey'+el.id);
        r2.style.border='2px solid red';
    }
    function ImageK(el){
        let q;
        if(chooseCategory=='all'){
             q = currentItems;
        }
        else{
             q = currentItems.filter(el => el.tegs == chooseCategory);
             setImageM(1)
        }
        let r1 = document.querySelectorAll('.Gallery div');
        for (let i = 0; i < r1.length; i++) {
            r1[i].style.border='2px solid transparent';
        }
        let o = imageM+1;
        let o2 = imageM-1;
        if(el===1){
            if(imageM==0){
                let t = q.length-1;
                console.log(q.length-1)
                let r2 = document.querySelector('.divKey'+q[t].id);
                r2.style.border='2px solid red';
                setImageM(t)
            }
            else {
                let r2 = document.querySelector('.divKey'+q[o2].id);
                r2.style.border='2px solid red';
                setImageM(o2)
            }
        }
        else if(el===2){
            if(imageM===q.length-1){
                let r2 = document.querySelector('.divKey'+q[0].id);
                r2.style.border='2px solid red';
                setImageM(0)
            }
            else {
                let r2 = document.querySelector('.divKey'+q[o].id);
                r2.style.border='2px solid red';
                setImageM(o)
            }
        } 
    }
   useEffect(()=>{
    document.onkeydown = function(e){
        if(e.keyCode == 37){ImageK(1)}
        else if(e.keyCode == 39){ImageK(2)} 
        else if(e.key == 'Tab'){AddImageFolder()} 
        else if(e.key == 'Escape'){
            setPhotoSee(false);
            setPhotoSeeCheck('')
        } 
    }
    })
    function DeleteImageMiniFilter(el){
        let p = currentItems.filter(el => el.tegs == chooseCategory)
        const names = p.filter(elem => elem.id !== el.id);
        if(imageM==currentItems.length-1)setImageM(currentItems.length-2)
        if(imageM==p.length-1)setImageM(p.length-2)
        setCurrentFilter(names);
        const namesMain = currentItems.filter(elem => elem.id !== el.id);
        setCurrentItems(namesMain);
    }
    function DeleteImageMini(el){
        const names = currentItems.filter(elem => elem.id !== el.id);
        if(imageM==currentItems.length-1)setImageM(currentItems.length-2)
        setCurrentItems(names); 
    }
    function AddImageFolder(){
        setAddPhotoTrue(!AddPhotoTrue)
    } 
    function all(){
        setPhotoSeeFilter(false)
        setChooseCategory('all')
    }
    function allMain(){
        setCurrentItems(arrayphoto);
        setPhotoTwoTrue(false)
    }
    const [ArrLi, setArrLi] = useState([
        {id:1, title: 'other'},
        {id:2, title: 'game'},
        {id:3, title: 'monster'},
    ])
    
    const [AddPhotoInFolder, setAddPhotoInFolder] = useState('')
    const [AddPhotoInFolderTrue, setAddPhotoInFolderTrue] = useState(false)
    const [AddPhotoTrue, setAddPhotoTrue] = useState(false)
    const [AddPhotoArray, setAddPhotoArray] = useState([])
    function CloseAddInFolder(){
        setAddPhotoInFolder('')
        setAddPhotoInFolderTrue(false)
        setAddPhotoTrue(false)
        setAddPhotoArray([])
    }
    const [currentCard, setCurrentCard] = useState(null)
        function dragStartHandler(e,el){        
            setCurrentCard(el)
        }
       function dragEndHandler(e){
        e.target.style.boxShadow= 'none'
       }
       function dragLeaveHandler(e){
        e.target.style.boxShadow= 'none'
       }
       function dragOverHandler(e){
           e.preventDefault()
            e.target.style.boxShadow= '0 2px 3px gray'
       }
       function dropHandler(e, el){
           e.preventDefault()
           setCurrentItems(currentItems.map(c=>{
            if(c.id === el.id){
                return{...c, order: currentCard.order}
            }
            if(c.id === currentCard.id){
                return{...c, order: el.order}
            }
            return c
        }))
             if(!photoTwoTrue){
        setArrayphoto(arrayphoto.map(c=>{
            if(c.id === el.id){return{...c, order: currentCard.order}}
            if(c.id === currentCard.id){return{...c, order: el.order}}
            return c
        }))}
        else if(photoTwoTrue){
            setArrayphotoTwo(arrayphotoTwo.map(c=>{
                if(c.id === el.id){
                    return{...c, order: currentCard.order}
                }
                if(c.id === currentCard.id){
                    return{...c, order: el.order}
                }
                return c
            }))
        }
        e.target.style.background= 'while'
       }
       const sortCards = (a,b) =>{
                if(a.order>b.order){return 1}
                else{return -1}
            }
        const [chooseCategory, setChooseCategory] = useState('all')
       function HideImg(){
        setPhotoSee(false)
        setPhotoSeeCheck('')
       }
       function DragFunction(props){
        setAddPhotoArray([...AddPhotoArray, {id:Date.now(),  order: Date.now(), title:'winter',image: props.el.image, style: "red", tegs: props.el.tegs}])
       }
       function DragFunctionFilter(props){
        setAddPhotoArray([...AddPhotoArray, {id:Date.now(),  order: Date.now(), title:'winter',image: props.el.image, style: "red", tegs: props.el.tegs}])
       }
    return(
        <div style={{backgroundColor: 'black'}}>
            {PhotoSee&&!PhotoSeeFilter
                ?   <PhotoClass HideImg={HideImg} currentItems={currentItems} imageM={imageM} ImageK={ImageK} DeleteImageMini={DeleteImageMini} chooseCategory={chooseCategory} DeleteImageMiniFilter={DeleteImageMiniFilter}></PhotoClass>
                : false
            }
            {PhotoSee&&PhotoSeeFilter
                ?  <PhotoClass HideImg={HideImg} currentItems={currentFilter} imageM={imageM} ImageK={ImageK} DeleteImageMini={DeleteImageMini} chooseCategory={chooseCategory} DeleteImageMiniFilter={DeleteImageMiniFilter}></PhotoClass >     
                : false
            }
            <div style={{backgroundColor:' #6c6c6c', padding: '10px'}}> <div className='PhotoLogo'></div></div> 
            <TagsFolder CreateTags={CreateTags} addImg={addImg} AddPhotoInFolderTrue={AddPhotoInFolderTrue} setAddPhotoInFolderFu={setAddPhotoInFolderFu} CloseAddInFolder={CloseAddInFolder} setAddPhotoInFolderTrueFunction={setAddPhotoInFolderTrueFunction} AddPhotoInFolder={AddPhotoInFolder} AddPhotoTrue={AddPhotoTrue} AddPhotoArray={AddPhotoArray} onClickCheck={onClickCheck} all={all} ArrLi={ArrLi} ChooseCategoryFunction={ChooseCategoryFunction} chooseCategory={chooseCategory} allMain={allMain} funcref={funcref}></TagsFolder>
            <div className="PhotoGallery" draggable={true}>
                <div className='Gallery' draggable={false}>
                    {chooseCategory == 'all'
                        ?   <DragDrop dragStartHandler={dragStartHandler} dragLeaveHandler={dragLeaveHandler} dragEndHandler={dragEndHandler} dragOverHandler={dragOverHandler} dropHandler={dropHandler} AddPhotoTrue={AddPhotoTrue} thisImage={thisImage} DeleteImageMini={DeleteImageMini} thisImageMini={thisImageMini} currentItems={currentItems} imageM={imageM} DragFunction={DragFunction} sortCards={sortCards}></DragDrop> 
                        :   <DragDropFilter dragStartHandler={dragStartHandler} dragLeaveHandler={dragLeaveHandler} dragEndHandler={dragEndHandler} dragOverHandler={dragOverHandler} dropHandler={dropHandler} AddPhotoTrue={AddPhotoTrue} thisImageFilter={thisImageFilter} DeleteImageMini={DeleteImageMini}  currentItems={currentItems} imageM={imageM} sortCards={sortCards} thisImageMiniFilter={thisImageMiniFilter} currentFilter={currentFilter} DragFunctionFilter={DragFunctionFilter} chooseCategory={chooseCategory} DeleteImageMiniFilter={DeleteImageMiniFilter}></DragDropFilter>         
                    }    
                </div>
            </div>
        </div>     
    )
}

export default PhotoGallery;