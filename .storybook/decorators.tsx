import React from 'react';
import {initialTheme} from '../src/Theme';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';

export const ThemeProvider: DecoratorFn = (StoryFn) => {
  return (
    <SCThemeProvider theme={initialTheme.theme}>
      <StoryFn />
    </SCThemeProvider>
  )
}

export const withBackground: DecoratorFn = (StoryFn) => {
  return (
    <div
      style={{
        width: '500px',
        height: '100vh',
        backgroundColor: '#E5E5E5',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <StoryFn />
    </div>
  );
};