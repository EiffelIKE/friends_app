import { createContext, useContext } from 'react';

import type { DefaultTheme } from 'styled-components';
import { initialTheme } from './initial-theme';
import type { FriendTheme } from './types';

export const actions = {
  UPDATE_THEME: 'UPDATE_THEME',
};

type Keys = keyof typeof actions;
type ActionType = (typeof actions)[Keys];

interface Actions {
  type: ActionType;
  payload: DefaultTheme;
}

export const ThemeContext = createContext<FriendTheme>(initialTheme);

export const reducer = (state: FriendTheme, action: Actions) => {
  switch (action.type) {
    case actions.UPDATE_THEME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  return { theme };
};
