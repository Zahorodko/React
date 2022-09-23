import styled from 'styled-components'

export const MainShop = styled.div`
    width: 1280px;
    margin: 50px auto;
` 
export const Presentation = styled.div`
    margin: 50px 0;
    background: url('./img/room.webp')  center bottom;
    width: 100%;
    height: 500px;
    background-size: cover;
    background-blend-mode: multiply;
    background-color: rgb(52 52 52 / 64%);
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px black;
        &:after{
            content: 'Najlepsze meble dla waszego mieszkania w niskich cenach';
            position: absolute;
            top: 100px;
            left: 50px;
            color: rgb(223, 226, 40);
            width: 300px;
            font-size: 40px;
            font-weight: 600;
            text-shadow: 8px 8px 3px 7ca8af8;
        }
` 