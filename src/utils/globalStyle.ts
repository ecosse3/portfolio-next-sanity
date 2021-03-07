import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy Regular';
    src: url('/fonts/Gilroy-Regular.woff') format('woff'),
         url('/fonts/Gilroy-Regular.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy Medium';
    src: url('/fonts/Gilroy-Medium.woff') format('woff'),
         url('/fonts/Gilroy-Medium.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy Bold';
    src: url('/fonts/Gilroy-Bold.woff') format('woff'),
         url('/fonts/Gilroy-Bold.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy Bold';
    src: url('/fonts/Gilroy-Bold.woff') format('woff'),
         url('/fonts/Gilroy-Bold.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy Heavy';
    src: url('/fonts/Gilroy-Heavy.woff') format('woff'),
         url('/fonts/Gilroy-Heavy.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Built Titling El';
    src: url('/fonts/BuiltTitlingEl.woff') format('woff');
    font-style: normal;
  }

  @font-face {
    font-family: 'Built Titling Rg Regular';
    src: url('/fonts/BuiltTitlingRg-Regular.woff') format('woff'),
         url('/fonts/BuiltTitlingRg-Regular.woff2') format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'BuiltTitlingRg Bold';
    src: url('/fonts/BuiltTitlingRg-Bold.woff') format('woff');
    font-style: normal;
  }
`;

export default GlobalStyles;
