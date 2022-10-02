import React, { useState } from 'react';
import './PhotoGallery.css';
import { GallerySvg } from './PhotoGallerySvg';

 const TagsFolder = (props) => {
    function OpenFolder(el){
        console.log(el)
        if(el==1){
            props.allMain()
        }
        else if(el==2){
            props.funcref()
        }
    }    
    const [inputAddOne, setInputAddOne] = useState(''); 
    const SelectOption=()=>{
        return(
            <select id="selectOption"  value={inputAddOne} onChange={(e)=>setInputAddOne(e.target.value)}>
                {inputAddOne.length>0 
                ? ''
                : <option value={inputAddOne} disabled selected style={{textTransform: 'none'}}>Choose a tag</option>
                }
                    {props.ArrLi.map((el)=>
                        <option style={{textTransform: 'capitalize'}} key={el.id} value={el.title}>{el.title}</option>
                    )} 
            </select>
        )
    }
    const [CreateOpen, setCreateOpen] = useState(false);
    const [TagsOpen, setTagsOpen] = useState(false);
    const [inputAddTwo, setInputAddTwo] = useState(''); 
    const [InputAddFolder, setInputAddFolder] = useState('')
    const [InputAddTags, setInputAddTags] = useState('')
    const [CreateImageSee, setCreateImageSee]=useState(false)
    const [CreateFolderSee, setCreateFolderSee]=useState(false)
    const [CreateTagsSee, setCreateTagsSee]=useState(false)
    const [ArrayFolder, setArrayFolder] = useState([
        {id: 1, title:'All',  func: 'all()', arr:[{
            id:1, title:'winter',image: require("./img/41.jpg"), style: "red", tegs: 'game'
        }]},
        {id: 2, title:'Nature',  func: 'funcref()'},
    ])
    function CreateFolder(InputAddFolder){
        setArrayFolder([...ArrayFolder, {id:3, title: InputAddFolder}])
    }
    return(
        <div className="tagsFolder">
        {ArrayFolder.map((el)=>
        <span key={el.id} onClick={()=>{if(props.AddPhotoInFolderTrue)props.setAddPhotoInFolderFu(el)}} onDoubleClick={()=> {OpenFolder(el.id);props.CloseAddInFolder()}} className='folder' ><GallerySvg></GallerySvg>{el.title}</span>
        )}
        <div className='AddInFolderButton' onClick={()=>props.setAddPhotoInFolderTrueFunction()}>Add Photo in folder 
         </div>
         {props.AddPhotoInFolderTrue
        ? <div className='AddPhotoInFolderTrue'>
            <div className='HelpAddPhotoFolder'> 
                <p>Select a folder to add photos</p> 
                <p className='SaveClose'>Folder: {props.AddPhotoInFolder.title}</p> 
            </div>
            <div className='HelpAddPhotoFolder'> 
                <p>Click Tab to start photo transfer</p>
                <div className='SaveClose'>Click Tab: {props.AddPhotoTrue ? 'start' : 'stop'}</div>
            </div>
            <div className='PhotoAddFolder'>
                {props.AddPhotoArray.map((el)=>
                    <img style={{width:'90px', padding:'2px'}} src={el.image}/>
                )}
            </div>
            <div className='SaveCloseButton'>
                <div onClick={()=>{props.AddPhotoInFolder !=='' ? props.onClickCheck() : alert('Specify a folder')}} style={{cursor:'pointer'}}>Save</div>
                <div onClick={()=>props.CloseAddInFolder()} style={{cursor:'pointer'}}>Close</div>
            </div>
            </div> 
        : ''
        }
        <ul className='tagsFolderUl'>
            <p onClick={()=> setTagsOpen(!TagsOpen)}>Tags</p>
            {TagsOpen
            ? 
            <span style={{listStyleType: 'none'}}>
                <li onClick={()=>props.all()}>all</li>
                {props.ArrLi.map((el)=><li key={el.id} onClick={()=>props.ChooseCategoryFunction(el)} >{el.title}</li>)}
            </span>
            : ''
            }
        </ul>
        <div className='ActuallyTags'>Actual tags: {props.chooseCategory}</div>
        <div className='addImage'>
            <p style={{cursor:'pointer'}} onClick={()=> setCreateOpen(!CreateOpen)}>Create</p>
            {CreateOpen
            ?   <div className='AddImageSee'>
                    <div className='spanclass' style={{height:CreateImageSee? 'auto' : '30px'}}>
                        <p onClick={()=>setCreateImageSee(!CreateImageSee)}>Add image</p> 
                             <SelectOption></SelectOption>
                        <input type='text' className='addImageImg' value={inputAddTwo} onChange={(e)=>setInputAddTwo(e.target.value)} placeholder='Link to picture...'></input>
                        <button onClick={()=>{inputAddOne&&inputAddTwo.length>0 ? props.addImg(inputAddTwo,inputAddOne) : alert('Choose a tag or specify a link')}}>Create</button>
                    </div>                    
                    <div className='spanclass' style={{height:CreateFolderSee? 'auto' : '30px'}}>
                        <p onClick={()=>setCreateFolderSee(!CreateFolderSee)}>Create Folder</p>
                        <input type='text' className='addImageImg' onChange={(e)=>setInputAddFolder(e.target.value)} placeholder='New Folder...'></input>
                        <button onClick={()=>{InputAddFolder.length>0 ? CreateFolder(InputAddFolder) : alert('Specify a folder name')}}>Create</button>
                    </div>
                    <div className='spanclass' style={{height:CreateTagsSee? 'auto' : '30px'}}>
                        <p onClick={()=>setCreateTagsSee(!CreateTagsSee)}>Create new tag</p>
                        <input type='text' className='addImageImg' onChange={(e)=>setInputAddTags(e.target.value)} placeholder='New tags...'></input>
                        <button onClick={()=>{InputAddTags.length>0 ? props.CreateTags(InputAddTags) : alert('Specify a tag name')}}>Create</button>
                    </div>
                </div>
            : ''
            }                
        </div>
    </div>
    )
}

export default TagsFolder