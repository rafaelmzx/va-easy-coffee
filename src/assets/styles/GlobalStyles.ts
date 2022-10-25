import { createGlobalStyle } from 'styled-components'
import { colors } from './variables'

const { backgroundWhite } = colors

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${backgroundWhite};
}
`


export default GlobalStyle