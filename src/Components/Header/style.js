import styled  from 'styled-components'
import { projectColors } from '../../Styles/Colors/colors'

export const ContainerHeaderTotal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 45px;
    background-color: ${projectColors.darker};
    margin: 0.25rem;
    border-radius: 32px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 25;
        font-size: 2em;
        margin: 0.25em;
        color: ${projectColors.secondary};
        background-color: transparent;
        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.3s;

        :hover{
            color: ${projectColors.primary};
        }

        :active{
            opacity: 0.7;
            filter: drop-shadow(0 0 2px ${projectColors.secondary})
        }
    }
`