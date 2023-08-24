'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    background-color: aliceblue;
    box-sizing: border-box;
    font-size: 62.5%;
    padding: 0;
    text-align: center;
  }

  *, *::before, *::after {
    box-sizing: inherit;
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
