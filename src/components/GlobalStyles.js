import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{background: pink}

html{
    text-align:center;
}
`;

export default GlobalStyles;
