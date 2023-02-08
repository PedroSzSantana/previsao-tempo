import styled from "styled-components";

export const StyledCard = styled.div`
    width: 40%;
    margin-top: 10px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width:1160px) {
        justify-content: center;
    }
    @media screen and (max-width:426px){
        justify-content: center;
    }
`
export const StyledDiv1 = styled.div`
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
    @media screen and (max-width:426px) {
        #localName{
            font-size: 15px;
            font-weight: 500;
            svg{
                width: 10px;
            }
        }
        #temp_c{
            p{
                font-size: 35px;   
            }
        }
    }
`
export const StyledDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 20px;
    @media screen and (max-width:426px) {
        font-size: 13px;
        font-weight: 500;
    }
`
export const StyledLoading = styled.div`
    img{
        width: 100px;
    }
`