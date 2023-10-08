import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    align-items: center;
    z-index: 99;
    background-color: ${props => (props.scroll ? 'var(--gray-300)' : 'transparent')};
`
export const Logo = styled.div`
    display: flex;
`
export const TextThe = styled.div`
    color: var(--red-900);
    font-weight: 700;
    font-size: 25px;
    margin-right: -3px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`
export const TextMovie = styled.div`
    font-size: 30px;
    padding-top: 10px;

    @media screen and (max-width: 768px){
       font-size: 25px;
    }
`
export const BtnFavorite = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    p{
    padding-left: 10px;
    font-size: 22px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
    }

`