'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap; 
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/noto-sans-v30-latin-300.woff2') format('woff2'); 
  }

  @font-face {
    font-display: swap; 
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/noto-sans-v30-latin-regular.woff2') format('woff2'); 
  }

  @font-face {
    font-display: swap; 
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/noto-sans-v30-latin-600.woff2') format('woff2'); 
  }

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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  
  html, body, #__next {
    height: 100%;
    padding: 0;
  }

  body {
    font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
