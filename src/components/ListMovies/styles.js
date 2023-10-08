import styled from "styled-components";
import { Link } from 'react-router-dom';

export const RowCards = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 20px;
    margin-left: 20px;

    ::-webkit-scrollbar {
    display: none;
    }

    @media screen and (max-width:768px){
        padding: 10px;
    }
`
export const SubTitle = styled.h2`
    font-size: 25px;
    padding-top: 20px;
    margin-left: 40px;
    border-bottom: 2px solid var(--red-900);
    width: fit-content;

    @media screen and (max-width:768px){
        font-size: 20px;
    }
`
export const BtnMovie = styled(Link)`
    background-color: transparent;
    border: 0;

    img{
    object-fit: contain;
    max-height: 300px;
    padding-left: 10px;
    transition: transform 450ms;

    &:hover{
    transform: scale(1.09);
    }

    @media screen and (max-width:768px){
       max-width: 250px;
       padding-left: 5px;
    }
    }

`
export const SubTitleSkeleton = styled.div`
    padding-top: 20px;
    margin-left: 40px;
    background-color: var(--gray-100);
    width: 170px;
    height: 40px;
    margin-top: 10px;
    border-radius: 10px;
`
export const MovieCardSkeleton = styled.div`
    background-color: var(--gray-100);
    width: 200px;
    height: 300px;
    margin-left: 10px;
`