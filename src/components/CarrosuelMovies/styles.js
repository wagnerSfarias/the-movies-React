import styled from "styled-components";
import { Link } from 'react-router-dom';

export const SubTitle = styled.h2`
    font-size: 25px;
    padding-top: 20px;
    margin-bottom: 20px;
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
    cursor: grab;

    img{
    max-height: 300px;
    width: 90%;
    transition: transform 450ms;

    &:hover{
    transform: scale(1.09);
    }
}

@media screen and (max-width:768px){
    img{
        &:hover{
            transform: none;
        }
    }
}
`
export const SubTitleSkeleton = styled.div`
    margin: 10px 0 10px 40px;
    background-color: var(--gray-100);
    width: 170px;
    height: 40px;
    border-radius: 10px;
`
export const MovieCardSkeleton = styled.div`
    background-color: var(--gray-100);
    width: 200px;
    height: 300px;
    margin-left: 10px;

    @media screen and (max-width:768px){
        max-height: 270px;
        width: 180px;
}
    @media screen and (max-width:480px){
        width: 170px;
    }
`
