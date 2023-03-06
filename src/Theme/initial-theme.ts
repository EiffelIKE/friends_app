import type { FriendTheme } from './types';

export const initialTheme: FriendTheme = {
  theme: {
    colors: {
      primary: {
        primaryBlue50: '#2E57FA',
        primaryBlue60: '#0637F9',
        primaryBlue70: '#052DCC',
      },
      grayScale: {
        gray20: '#5C5F6B',
        gray30: '#D0D3DA',
        gray50: '#F8F8FA',
        gray60: '#AAAFBD',
        gray70: '#B1B9DB',
        gray75: '#B1B9DB7F',
      },
      scroll: '#D5D8E2',
      bg: '#E5E5E5',
      white: '#FFFFFF',
      black: '#000000',
      active: '#16BA44',
      error: '#CE1F169F',
      darkOpacity: '#FFFFFF19',
    },
  },
  updateTheme: () => {},
};
