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
        height: '300px',
        backgroundColor: '#E5E5E5',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StoryFn />
    </div>
  );
};

export const GlobalDecorators = [ ThemeProvider, withBackground ]