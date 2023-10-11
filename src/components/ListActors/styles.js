import styled from "styled-components";

export const ContainerActors = styled.div`
    max-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;

    p{
        margin: 0;
    }
    
    img{
    max-height: 200px;
    border-radius: 10%;
    }

    @media screen and (max-width:768px){
        max-height: 280px;
        font-size: 15px;
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
