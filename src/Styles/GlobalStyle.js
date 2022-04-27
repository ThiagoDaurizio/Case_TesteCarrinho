import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Poppins', sans-serif;


    }

    html,
    body,
    :root{
        width: 100%;
        min-height: 100vh;
    }

    body{
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.textColor};

        a{
            color: ${(props) => props.theme.colors.textColor};
        }
    }
` 