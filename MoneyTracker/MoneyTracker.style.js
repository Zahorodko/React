import styled from 'styled-components'

export const MainClass = styled.div`
    background-color: #bfbfbf;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
    padding: 0em 0em;
    font-family: Georgia, 'Times New Roman', Times, serif;
    overflow: hidden;
` 
export const IncomeExpenses = styled.div`
    min-height: 400px;
    background-color: aliceblue;
    padding: 5px;
    width: 35vw;
    border: 3px solid #0100b9fc;
    box-shadow: -18px 15px 30px 0px #4e4e4e, 18px -14px 69px 0px #2c46a5;
    border-radius: 10px;
    outline: 4px solid #ffffff1f;
`
export const Create = styled.div`
    background-color: red;
`
export const CreateIncome = styled.div`
    background-color: blue;
`
export const CreateExpenses = styled.div`
    background-color: green;
`
export const CreateTags = styled.div`

`
export const TagsExpenses = styled.div`
    min-height: 200px;
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    display: ${(props)=>props.display};
    border: 1px solid black;
`
export const UlTegs = styled.ul`
    display: flex;
    flex-direction: column;
`
export const LiTegs = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
    box-sizing: border-box;
    margin-top: 2px;
    &:nth-child(odd){
        background-color: #ededed;
    }
    &:nth-child(even){
        background-color: #aac5e9;
    }
    &:hover{
        background-color: ${(props)=>props.backgroundColor};
    }
`
export const InputTags = styled.input`
    background:transparent; 
    min-width: 40px;
    text-align: center;
    border:1px dashed black;
`