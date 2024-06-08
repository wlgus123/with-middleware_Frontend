import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: white;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
`;