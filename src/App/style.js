import styled from 'styled-components'
import { projectColors } from '../Styles/Colors/colors'

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    background-color: ${(props) => props.theme.colors.lineColor};
`