'use client'

import { createGlobalStyle, css } from 'styled-components'

interface FontFamily {
  family: string
  weight: number
  src: string
}

const defineFontFace = (fonts: FontFamily[]) =>
  fonts
    .map(
      (font) =>
        `@font-face {
      font-display: swap;
      font-family: ${font.family};
      font-weight: ${font.weight};
      src: url('${font.src}') format('woff2');
    }`,
    )
    .join('')

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ${({ theme }) => css`
    ${defineFontFace(theme.fonts)}

    html {
      background-color: aliceblue;
      box-sizing: border-box;
      font-size: 62.5%; /* 1rem = 10px == 10/16 = 62.6 */
      padding: 0;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html,
    body,
    #__next {
      height: 100%;
      padding: 0;
    }

    body {
      font-family:
        '${theme.base.fontText}',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Open Sans',
        'Helvetica Neue',
        sans-serif;
    }
  `}  

`

export default GlobalStyles
