import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Oxygen', sans-serif;;
    font-size: 16px;
    line-height: 24px;
    background: linear-gradient(135deg, #FAD7A1 0%, #E96D71 100%) no-repeat;
  }
`;

export default GlobalStyle;
