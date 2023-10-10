import styled from "styled-components";

export const ContainerDetail = styled.div`
    padding-bottom: 20px ;
`
export const Container = styled.div`
    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem ;
    display: flex;
    flex-direction: column;
    color: var(--white);
    border: 4px solid var(--red-900);

    h1 {
        font-size: 36px;
        text-align: center;
        font-weight: 800;
        color: var(--white);
    }

    p {
    font-size: 22px;
    text-align: center;
    margin: 10px auto;
     }
    
    @media screen and (max-width:970px){
        max-width: 650px;

        h1{
        font-size: 28px;
        font-weight: 600;
        width: 80%;
        margin: 0 auto;
        }
        p{
            font-size: 18px;
        }
    }

    @media screen and (max-width:768px){
        max-width: 460px;
        p{
            font-size: 16px;
        }
    }
    @media screen and (max-width:480px){
        max-width: 325px;
        padding: 2rem 1rem;

        h1{
        font-size: 20px;
        margin-top: 10px;
        }
        p{
            font-size: 14px;
        }
}
`
export const ContainerTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const Sinopse = styled.p`
    font-size: 20px;
    line-height: 1.35;
    text-align: center;
    margin: 10px 0;

    @media screen and (max-width:970px){
        margin: 20px 0;
    }
`
export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;

    @media screen and (max-width:480px){
        margin: 0;
        padding: 0;
    }
`
export const Trailer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    svg{
        transition: transform ease-in-out 1s;
        font-size: 40px;

        &:hover{
         color: var(--red-900);
         transform: scale(1.30);
        }
    }
`
export const ContainerIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: rgb(26, 25, 25);
    border: 2px solid var(--red-900);
    cursor: pointer;

    font-size:30px;
    color: var(--white);
    
    @media screen and (max-width:970px){
        width: 54px;
        height: 54px;
        border-radius: 26px;
        font-size: 25px;
    }
    @media screen and (max-width:768px){
        width: 40px;
        height: 40px;
        border: 2px solid var(--red-900);
        font-size: 20px;
    }
    @media screen and (max-width:480px){
        width: 34px;
        height: 34px;
        border-radius: 17px;
        font-size: 16px;
    }
`
export const ContainerGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Genres = styled.div`
    background-color: rgba(183, 178, 178, 0.34);
    margin: 15px;
    padding: 2px 15px;
    border-bottom: 3px solid var(--red-700);
    border-bottom-right-radius: 15px;
    p{
        font-size: 18px;
    }

    @media screen and (max-width:768px){
        margin: 10px;
        p{
            font-size: 16px;
        }
    }
    @media screen and (max-width:480px){
        margin: 5px;
        padding:  0 5px;
        border-bottom: 2px solid var(--red-700);
        border-bottom-right-radius: 10px;
        p{
            font-size: 14px;
        }
    }

`

export const ContainerSkeleton = styled.div`
    max-width: 800px;
    margin: 2rem auto ;
    height: 385px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 6px solid var(--gray-100);

    @media screen and (max-width:970px){
        max-width: 650px;
    }
    @media screen and (max-width:768px){
        max-width: 450px;
    }
    @media screen and (max-width:480px){
        max-width: 290px;
    }

`
export const WarnSkeleton = styled.h1`
    padding-top: 15%;
    text-align: center;
    color: var(--white);
    font-size: 28px;

    @media screen and (max-width:768px){
        font-size: 25px;
        width: 50%;
        margin: auto;
    }
    @media screen and (max-width:480px){
        font-size: 20px;
    }
    
`
export const TitleSkeleton = styled.div`
    background-color: var(--gray-100);
    width: 200px;
    height: 40px;
    border-radius: 10px;
`
export const SinopseSkeleton = styled.div`
    background-color: var(--gray-100);
    margin-top: 20px;
    width: 600px;
    height: 200px;
    border-radius: 10px;
    
    @media screen and (max-width:768px){
        max-width: 400px;
    }
    @media screen and (max-width:480px){
        max-width: 250px;
        height: 180px;
    }
`
