import React ,{ useState } from 'react'
import Checkbox from './Checkbox';
import { Generator, GeneratorH, GeneratorMain, CreatePass, Password, CopyClass, CreateClass, CheckDiv, PassLabel, PassInput, LengthPass } from './Password.style';

const PasswordGenerator = () => {
    const [checked, setChecked] = useState(false);
    const [checkedUpper, setCheckedUpper] = useState(false);
    const [checkedLower, setCheckedLower] = useState(false);
    const [checkedSpecial, setCheckedSpecial] = useState(false);
    const [Create, setCreate] = useState('Password');
    const numbers = '0123456789';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters ='abcdefghijklmnopqrstuvwxyz';
    const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
    const [targValue, setTargValue] = useState(5);
    const [CopyPass, setTCopyPass] = useState(false);

    const handleChange4 = (e) => {
        if( e <= 12 && e > 0 )setTargValue(e)
        else if( e > 12 ){
            alert('Enter password length from 1 to 12')
            setTargValue(12);
        }
    }
    const CreatePassFu = () =>{
        let list = '';
        if(checked){
            list = list + numbers;
        }
        if(checkedUpper){
            list = list + upperCaseLetters;
        }
        if(checkedLower){
            list = list + lowerCaseLetters;
        }
        if(checkedSpecial){
            list = list + specialCharacters;
        }
        if(list.length==0){
            alert('Select password options');
        }  
        if(list.length>0){
            let text = "";
            let mas = list;
            for (let i = 0; i < targValue; i++) {
                let cars = Math.floor(0 + Math.random() * (mas.length - 0));
                text += mas[cars];
                setCreate(text)
            }    
        }
        if(targValue===undefined)alert('Enter password length')
    }
    const handleCopyOne = () =>{
        setTCopyPass(true)
        navigator.clipboard.writeText(Create);
    }
    return(
        <GeneratorMain>
            <Generator>
                <GeneratorH>Password generator</GeneratorH>
               
                <CheckDiv>
                    <h3>Select password options</h3>
                    <Checkbox label=' Numbers' value={checked} onChange={()=>  setChecked(!checked)}></Checkbox>
                    <Checkbox label=' UpperCaseLetters' value={checkedUpper} onChange={()=>setCheckedUpper(!checkedUpper)}></Checkbox>
                    <Checkbox label=' LowerCaseLetters' value={checkedLower} onChange={()=>setCheckedLower(!checkedLower)}></Checkbox>
                    <Checkbox label=' SpecialCharacters' value={checkedSpecial} onChange={()=> setCheckedSpecial(!checkedSpecial)}></Checkbox>
                </CheckDiv>
                <PassLabel>
                    <LengthPass>Enter password length from 1 to 12</LengthPass>
                    <PassInput type="number" id="quantity" name="quantity" min="1" max="12" value={targValue} onChange={(e)=>handleChange4(e.target.value)} ></PassInput> 
                </PassLabel>
                <Password>
                    <CreatePass onClick={()=>CreatePassFu()}>Create password</CreatePass>
                    <CreateClass>{Create}</CreateClass>
                    <CopyClass style={{background: CopyPass?'red':''}} onMouseOut={()=> setTCopyPass(false)}>
                        <p style={{ background: 'transparent' }}  onClick={()=>handleCopyOne()}  title='Copy'>Copy password</p>
                    </CopyClass>
                </Password>
            </Generator>
        </GeneratorMain>
    )
}
export default PasswordGenerator;