import styled from 'styled-components'
import ImageFon from './5.jpg'

export const GeneratorMain = styled.div `
    width: 100vw;
    height: 100vh;
    margin: 0%;
    padding: 0;
    background: url(${ImageFon}) no-repeat center center rgb(80,81,255);
    position: absolute;
    display: flex;
    align-items: center;
`
export const Generator = styled.div `
    width: 500px;
    background-color:  #15007bba;
    margin: 0 auto;
    padding: 2%;
    display: flex;
    flex-direction: column;
    color: #2472ff;
`
export const GeneratorH = styled.h1 `
    text-align: center;
`
export const CreatePass = styled.div `
    margin: 10px auto;
    padding: 10px;
    font-size: 1.1em;
    border: 1px solid #2472ff;
    cursor: pointer;
    border-radius: 10px;
    background-color: #1f16ff75;
    color: #b8c0ff;

    &:hover{
        background-color: #3d84ff;
        border: 1px solid rgb(243, 105, 105);
        color: black;
    }
`
export const Password = styled.div `
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
`
export const CopyClass = styled.div `
    margin: 10px auto;
    padding: 10px;
    font-size: 1.1em;
    border: 1px solid #2472ff;
    cursor: pointer;
    border-radius: 10px;
    background-color: #1f16ff75;
    color: #b8c0ff;

    &:hover{
        border: 1px solid rgb(243, 105, 105);
        background-color: #3d84ff;
        color: black;
    }
`
export const CreateClass = styled.div `
  width: 140px;
    padding: 20px 20px;
    border: 1px solid black;
    margin: 0 auto;
    background-color: rgb(96, 238, 249);
    text-align: center;
    font-size: 1.1em;
    border-radius: 10px;
    color: black;
`
export const CheckDiv = styled.div `
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.2em;
    padding: 20px;
    border: 1px solid rgb(114 114 114);
    border-radius: 5px;
`
export const CheckInput = styled.input `
    cursor: pointer;
`
export const PassLabel = styled.label `
    margin-top: 10px;
    text-align: center;
    border: 1px solid rgb(114 114 114);
    padding: 5px;
    border-radius: 5px;
`
export const LengthPass = styled.p `
    font-size: 1.2em;
    text-align: center;
`
export const PassInput = styled.input `
    width: 60px;
    height: 30px;
    padding: 5px 0 5px 10px;
    background-color: #3470d7;
    border-radius: 10px;
    color: black;
    font-size: 1.5em;
    border: 1px solid #1952b3;
    outline: none;
    text-align: center;
    &:focus{
        border: 1px solid blue;
        box-shadow:  1px 1px 2px 0 blue;
    }
`
