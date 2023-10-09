import styled from "styled-components";

export const Container = styled.div`
    color: var(--white);
    padding-bottom: 20px;
`
export const ContainerBanner = styled.div`
    object-fit: contain;
    display: flex;
    padding-bottom: 10px;
    align-items: flex-end;
    height: 70vh;
    background-size: cover;
    background-position: center top;
    cursor: pointer;

    @media screen and (max-width:970px){
        height: 450px;
    }
    @media screen and (max-width:768px){
        height: 350px;
    }
    @media screen and (max-width:480px){
        height: 280px;
    }
`
export const BannerContent = styled.div`
    background-color: var(--gray-300);
    margin-left: 30px;
    padding: 0 10px;
    border-radius: 5px;
    border-left: 5px solid var(--white);
    z-index: 99;

    h1{
    font-size: 40px;
    font-weight: 800;
    padding-bottom: 0.3rem;
    }

    @media screen and (max-width:768px){
        margin-left: 20px;
        padding: 0 5px;

        h1{
        font-size: 2rem;
        font-weight: 600;
        width: 100%;
        }
    }
    @media screen and (max-width:480px){
        margin-left: 10px;
        padding: 0 5px;

        h1{
        font-size: 1.3rem;
        font-weight: 600;
        }
    }
`
export const ContainerSkeleton = styled.div`
    height: 480px;
    display: flex;
    padding-bottom: 10px;
    align-items: flex-end;
    background-color: var(--gray-100);

    @media screen and (max-width:768px){
        height: 350px;
    }
    @media screen and (max-width:480px){
        height: 280px;
    }
`
export const BannerSkeleton = styled.div`
    background-color: var(--gray-200);
    margin-left: 30px;
    border-radius: 5px;
    border-left: 5px solid var(--white);
    width: 300px;
    height: 60px;

    @media screen and (max-width:768px){
        margin-left: 20px;
        width: 250px;
        height: 50px;
    }
    @media screen and (max-width:480px){
        margin-left: 10px;
        width: 200px;
        height: 30px;
    }
`
export const TitleSkeleton = styled.div`
    background-color: rgba(173, 165, 165, 0.7);
    height: 100%;
`
