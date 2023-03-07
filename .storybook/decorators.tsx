import React from 'react';
import { initialTheme, GlobalStyles } from '../src/Theme';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';

export const ThemeProvider: DecoratorFn = (StoryFn) => {
  return (
    <SCThemeProvider theme={initialTheme.theme}>
      <GlobalStyles/>
      <StoryFn />
    </SCThemeProvider>
  )
}

export const withBackground: DecoratorFn = (StoryFn) => {
  return (
    <div
      style={{
        minHeight: '300px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <StoryFn />
    </div>
  );
};

export const GlobalDecorators = [ ThemeProvider, withBackground ]