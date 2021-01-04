import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
    }

    img {
        display:block;
        max-width:100%;
        height:auto; 
    }

    a {
        &:hover {
        text-decoration: none;
        }
    }

    li {
        list-style: none;
    }
    
    body {
        font-family: 'Lato', sans-serif;
    }
`;

export default GlobalStyles;
