import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
    font-size: 100%;
    text-decoration: none;
    line-height: 1;
  }

  :root {
  --letterColorBody: #000000;
  --backgroundBody: #ececec;
  --grayPlatinum: #e5e5e5;
  --blue: #03a9f4;
  --gray: #ccc;
  --green: #4caf50;
  --orange: #ff9800;
  --pink: #e91e63;
  --mainFont: "Arial, Helvetica, sans-serif";
  
  }

  body {
      background-color: var(--backgroundBlueBody);
      color: var(--letterColorBody);
      font: 1rem var(--mainFont);
  }
`;
export default GlobalStyle;
