import { DefaultTheme } from 'styled-components';

export interface FriendTheme {
  theme: DefaultTheme;
  updateTheme: (theme: DefaultTheme) => void;
}
