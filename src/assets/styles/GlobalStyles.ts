import {createGlobalStyle} from 'styled-components'
import coffeBean from '../images/backgroundcoffeebeans.svg'

import { colors } from '../variables'

const { backgroundWhite } = colors

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${backgroundWhite};
    background-image: url(${coffeBean});
    background-size: 400px;
    height: 100vh;
  }
`

export default GlobalStyle