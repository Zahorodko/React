import styled from 'styled-components'

export const TodoMain = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0%;
    padding: 0;
    background: url('./img/2.jpg') no-repeat center center rgb(80,81,255);
    position: absolute;
` 
export const Todo = styled.div`
    width: 500px;
    min-height: 500px;
    margin: 10% auto;
    background-color: rgb(22,24,38);
    border-radius: 10px;
    padding: 3%;
    overflow: hidden;
    color: honeydew;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
` 
export const ExecutionLine = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 15px 0;
    font-size: 1.2em;
    font-weight: 500;
    color: #409aea;
    background: #1c3155;
    padding: 9px;
` 