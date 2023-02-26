import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}

type Colors = {
  primary: {
    primaryBlue50: string;
    primaryBlue60: string;
    primaryBlue70: string;
  };
  grayScale: {
    gray20: string;
    gray30: string;
    gray50: string;
    gray60: string;
    gray70: string;
  };
  bg: string;
  white: string;
  black: string;
  active: string;
};
