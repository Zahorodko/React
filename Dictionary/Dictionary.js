import React ,{ useState } from 'react'
import './Dictionary.css'
import { IconContext } from "react-icons";
import {AiOutlineLogin} from 'react-icons/ai';
import CreateButton from './CreateButton';

const Dictionary = ()=>{
        const [stateArr, setArr] = useState([
            {id:1, title: 'Teach you', body: 'Uczyć cię'},
            {id:2, title: 'Tiny', body: 'malutki'},
            {id:3, title: 'Whole', body: 'cały'},
            {id:4, title: 'Items', body: 'przedmiotów'},
            {id:5, title: 'Target', body: 'cel'},
            {id:6, title: 'Band', body: 'orkiestra'},
            {id:7, title: 'Sure', body: 'pewny'},
            {id:8, title: 'Battle', body: 'bitwa'},
            {id:9, title: 'Call', body: 'dzwonić'},
            {id:10, title: 'Tank', body: 'czołg'}
        ])
        const [count, setCount] = useState(2);
        const [post, setPost] = useState({ id: 6, title: '', body: ''})
        const [RatingWrite,setRatingWrite]=useState(0)
        const [value, setValue] = useState('')

        const deletePost = (post)=>{
            setArr(stateArr.filter( el => el !== post));
            setCount(count - 1);
           }
        const newPost = ()=>{
            if ((post.body).length>0 && (post.title).length>0){
                 setPost({...post, id: post.id+1})
                setCount(count + 1)
                setArr([...stateArr, post])
            }
        }
        const FirstL = (e) => {
            let r = e.target.value;
            const str1 = r.charAt(0).toUpperCase() + r.slice(1);
            setPost({...post, title: str1})
        }
        const FirstL2 = (e) => {
            let r = e.target.value;
            const str2 = r.charAt(0).toUpperCase() + r.slice(1);
            setPost({...post,body: str2})
        } 
        function RatingWriteFunc(el1){
            if(el1>RatingWrite) setRatingWrite(el1)
        }
        const filterC = stateArr.filter(post => {
            return post.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        });
        return(
            <div className='dictionaryMain'>
                <div className='LoteriaTopMain'> <h1>My dictionary</h1>  
                    <div style={{display:"flex", alignItems:'center'}}>
                    <p style={{fontSize: '1.4em', marginRight: '5px'}}>Login</p> 
                        <IconContext.Provider value={{className: "globalAiOutlineLogin"}}>
                            <AiOutlineLogin  title='Login'/>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className='value_1'>
                    <form>
                        <div>
                            <input style={{marginRight:'5px'}} type="text" name="lname" placeholder='Słowo' onChange={ e =>FirstL(e)}/>
                            <input  style={{marginLeft:'5px'}} type="text" name="lname" placeholder='Tłumaczenie' onChange={ e => FirstL2(e)}/>
                        </div>
                        <button type='reset' onClick={()=>newPost()}>Add word</button>
                    </form>
                    <input className='valueIn'
                        type='text' placeholder='search....'
                        onChange={(e) => setValue(e.target.value)}>   
                    </input>
                </div>
                <CreateButton filterC={filterC} count={count} delete={deletePost}   stateArr={stateArr}  RatingWrite={RatingWrite}  RatingWriteFunc={RatingWriteFunc} ></CreateButton>
            </div> 
        )
    }

export default Dictionary;