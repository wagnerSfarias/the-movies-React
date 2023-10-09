import styled from "styled-components";

export const ContainerFavorite = styled.div`
    padding: 10% 0;
`
export const ContainerMovie = styled.div`
    display: flex;
    border-left: 10px solid var(--white);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: 10px 0;
    background-color: rgba(103, 100, 101, 0.645);
    box-shadow: 10px 8px 10px 0px var(--red-300);

    img{
    object-fit: contain;
    max-height: 250px;
    padding-left: 5px;
    }

    div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 0 2%;
    width: 70%;
}
   p{
    font-size: 25px;
    width: 60%;
    text-overflow: ellipsis;
    overflow: hidden;
    }

    @media screen and (max-width:768px){
        border-left: 7px solid var(--white);
        box-shadow: 5px 3px 10px 0px var(--red-300);

        img{
            object-fit: contain;
            max-height: 200px;
            padding-left: 5px;
        }
        div{
            width: 50%;
        }
        p{
           font-size: 20px;
           width: 80%;
        }
    }
    
`
