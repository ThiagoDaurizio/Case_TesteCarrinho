import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { CompCart } from '../Components/Cart'
import { CompHeader } from '../Components/Header'
import GlobalStyle from '../Styles/GlobalStyle'
import { lightTheme, darkTheme } from '../Styles/Themes/theme'
import { ContainerApp } from './style'



const App = () => {
  const [theme, set_theme] = useState(lightTheme)
  const [freeShipping, set_freeShipping] = useState(true)

  const toggleTheme = () => {
    theme === darkTheme ? 
      set_theme(lightTheme)
      : 
      set_theme(darkTheme)
  }

  const toggleShipping = () => {
    set_freeShipping(!freeShipping)
  }



  return (
    <ThemeProvider theme={theme}>
      <ContainerApp>
        <CompHeader 
          toggleTheme={toggleTheme} 
          toggleShipping={toggleShipping}
        />
        <CompCart 
          freeShipping={freeShipping}
        />
        
        <GlobalStyle/>
      </ContainerApp>
    </ThemeProvider>
  );
}

export default App;
