import { FC, ReactNode, useReducer, useMemo } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

import 'bootstrap/dist/css/bootstrap.min.css';

import { actions, reducer, ThemeContext } from './Context';
import { initialTheme } from './initial-theme';

interface ThemeProps {
  children: ReactNode;
}

export const FriendThemeProvider: FC<ThemeProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTheme);

  const value = useMemo(
    () => ({
      theme: state.theme,
      updateTheme: (theme: DefaultTheme) => {
        dispatch({ type: actions.UPDATE_THEME, payload: theme });
      },
    }),
    [state]
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={state.theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
