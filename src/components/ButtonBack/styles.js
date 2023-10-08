import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    position: fixed;
    top: 3%;
    left: 3%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgb(26, 25, 25);
    border: 2px solid var(--red-900);
    font-size: 30px;

   @media screen and (max-width:970px){
    width: 50px;
    height: 50px;
   }
   @media screen and (max-width:768px){
    width: 40px;
    height: 40px;
    font-size: 20px;
   }
`