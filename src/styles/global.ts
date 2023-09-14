'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    background-color: aliceblue;
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem = 10px == 10/16 = 62.6 */
    padding: 0;
    text-align: center;
  }

  
  html, body, #__next {
    height: 100%;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
