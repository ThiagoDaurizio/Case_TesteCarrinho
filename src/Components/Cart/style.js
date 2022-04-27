import styled from 'styled-components'
import { projectColors } from '../../Styles/Colors/colors'


export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    max-width: 505px;
    border: 1px solid ${projectColors.darker};

    .cart-header{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 3rem;
        border-bottom: 3px solid ${projectColors.darker};
        font-weight: bolder;
        font-size: 1.5em;
    }

    .cart-items{
        margin-top: 1rem;
        min-height: 55vh;
        max-height: 75vh;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: ${projectColors.secondary} transparent;
    }

    .cart-values{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        min-height: 6rem;
        border-bottom: 3px solid ${projectColors.darker};
        border-top: 3px solid ${projectColors.darker};
    }

    .cart-values-total{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 3rem;
        font-weight: bold;
        font-size: 1.3em;
    }

    .cart-values-shipping{
        background-color: rgb(199, 255, 166);
        color: rgb(42, 138, 4);
        padding: 0.2rem 1rem;
        border-radius: 32px;
        opacity: 0.75;
        margin-bottom: 0.5rem;
    }

    .cart-button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 5rem;

        button{
            width: 90%;
            height: 65%;
            color: ${(props) => props.theme.colors.background};
            background-color: ${projectColors.secondary};
            font-size: 1.55em;
            font-weight: bolder;
            border: 1px solid transparent;
            border-radius: 12px;
            cursor: pointer;
            box-shadow: 0 1px 1px ${projectColors.darker};
            transition: 0.4s;

            :hover{
                background-color: ${projectColors.primary};
            }

            :active{
                opacity: 0.7;
                filter: drop-shadow(0 0 2px ${projectColors.secondary})
            }
        }
    }

    @media (max-width: 750px){
        .cart-items{
            max-height: 200vh;
        }
    }

`


export const ContainerProductsCard = styled.div`
    display: flex;

    img{
        width: 7.9rem;
    }

    .card-image{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 8rem;
        height: 8rem;
        overflow: hidden;
        margin: 0.5em;
        border: 2px solid ${projectColors.darker};
    }

    .card-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0.5em;
        padding: 1rem 0;
        width: 100%;

        p{
            font-weight: bold;
        }
    }

    .card-text-prices{
            p:nth-child(1){
                color: gray;
                font-size: 0.85em;
                opacity: 0.65;
            }

            p:nth-child(2){
                font-size: 0.95em;
            }
        }
`