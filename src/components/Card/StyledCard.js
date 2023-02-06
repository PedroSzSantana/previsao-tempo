import styled from "styled-components";


export const StyledCard = styled.div`
    width: 40%;
    margin-top: 10px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    #div1{
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        p{
            display: flex;
            align-items: center;
            gap: 3px;
            font-size: 20px;
            font-weight: 500;
            width: 170px;
            svg{
                width: 15px;
            }
        }
        #temp_c{
            display: flex;
            p{
                font-size: 35px;
            }
        }
    }
    #div2{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    @media screen and (max-width:1160px) {
        justify-content: center;
    }
`
export const StyledLoading = styled.div`
    img{
        width: 100px;
    }
`