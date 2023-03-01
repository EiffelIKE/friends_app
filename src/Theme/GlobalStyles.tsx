import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --fr-main-gray70: ${({ theme }) => theme.colors.grayScale.gray70};
    --fr-main-gray20: ${({ theme }) => theme.colors.grayScale.gray20};
    --fr-main-bg:  ${({ theme }) => theme.colors.bg};
    --fr-main-active: ${({ theme }) => theme.colors.active};
    --fr-main-white: ${({ theme }) => theme.colors.white};
    --fr-main-black: ${({ theme }) => theme.colors.black}
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
    font-family: Inter;
  }
  
  p, h1, h2, h3, h4, h5, a {
    margin: 0;
    padding: 0;
  }
`;
