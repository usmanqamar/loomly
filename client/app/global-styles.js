import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100% !important;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    line-height: 1.5;
  }

 

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    // background-color: #fafafa;
    min-height: 100%;
    // min-width: 100%;
    display: flex
  }

  p,
  label {
    line-height: 1.5em;
  }
  .card {
    height: 100%
   }
   img {
    margin: auto !important

   }
  
`;

export default GlobalStyle;
