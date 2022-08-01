import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html{
    scroll-behavior: smooth;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`;
export default GlobalStyles;
