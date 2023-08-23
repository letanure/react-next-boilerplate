'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    padding: 0;
    background-color: aliceblue;
    text-align: center;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
