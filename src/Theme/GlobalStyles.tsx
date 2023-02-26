import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --fr-main-gray70: ${(props) => props.theme.colors.grayScale.gray70};
    --fr-main-bg:  ${(props) => props.theme.colors.bg};
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    height: 100vh;
    width: 100%;
    background: var(--fr-main-bg);
    overflow-x: hidden;
  }
  
  p, h1, h2, h3, h4, h5, a {
    margin: 0;
    padding: 0;
  }
`;
