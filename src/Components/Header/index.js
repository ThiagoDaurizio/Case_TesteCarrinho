import { useState } from "react"
import { ContainerHeader, ContainerHeaderTotal } from "./style"




export const CompHeader = (props) => {
    const [iconTheme, set_iconTheme] = useState("moon")
    const [iconCart, set_iconCart] = useState("file-tray")

    const iconThemeToggle = () => {
        if(iconTheme === "moon"){
            set_iconTheme("sunny")
        }else{
            set_iconTheme("moon")
        }

        props.toggleTheme()
    }

    const iconCartToggle = () => {
        if(iconCart === "file-tray"){
            set_iconCart("file-tray-stacked")
        }else{
            set_iconCart("file-tray")
        }

        props.toggleShipping()
    }


    return(
        <ContainerHeaderTotal>
            <ContainerHeader>
                <button onClick={iconThemeToggle}> <ion-icon name={iconTheme}/> </button>
                <button onClick={iconCartToggle}> <ion-icon name={iconCart}/> </button>
            </ContainerHeader>

            <ContainerHeader>
                <a href="https://github.com/ThiagoDaurizio/Case_TesteCarrinho" target="_blank"><button> <ion-icon name="logo-github"/> </button></a>
                <a href="https://www.linkedin.com/in/thiago-daurizio-616b54226/" target="_blank"><button> <ion-icon name="logo-linkedin"/> </button></a>
            </ContainerHeader>
        </ContainerHeaderTotal>
    )
}