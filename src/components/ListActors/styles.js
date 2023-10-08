import styled from "styled-components";

export const ContainerActors = styled.div`
    max-height: 350px;
    margin: 0 5px;

    img{
    max-height: 230px;
    width: 165px;
    border-radius: 20%;
    object-fit: contain;
    }

    @media screen and (max-width:480px){
        max-height: 280px;
        font-size: 15px;

    img{
        max-height: 200px;
        width: 125px;
    }
    }
`
export const NameActor = styled.p`
    font-weight: 600;
    font-size: 18px;

    @media screen and (max-width:480px){
        font-weight: 500;
        font-size: 16px;             
     }
`
