import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
background-repeat: no-repeat;
background-attachment: fixed;
font-family: 'Montserrat', sans-serif;
height:100vh;
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

h1{
    font-size:3rem
}
h2{
    font-size: 1.5rem;
    font-weight:bolder
}

h2,h3,h4{
    font-weight:bolder
    }
img{display:block}
`;

export default GlobalStyles;
