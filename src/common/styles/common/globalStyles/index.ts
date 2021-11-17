import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Sans-Serif;
  }

  h1,h2,h3,h4,p {
    margin: 0;
    font-family: Sans-Serif;
    font-weight: 400 !important;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }
`
