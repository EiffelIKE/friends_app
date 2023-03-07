import React from 'react';
import { initialTheme, GlobalStyles } from '../src/Theme';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { Provider as ReduxProvider } from 'react-redux';
import {store} from '../src/store'

export const setUpProviders: DecoratorFn = (StoryFn) => {
  return (
    <ReduxProvider store={store}>
      <SCThemeProvider theme={initialTheme.theme}>
        <GlobalStyles/>
        <StoryFn />
      </SCThemeProvider>
    </ReduxProvider>
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

export const GlobalDecorators = [ setUpProviders, withBackground ]