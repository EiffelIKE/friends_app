import { GlobalDecorators } from './decorators';
import { initialize } from 'msw-storybook-addon';
import 'bootstrap/dist/css/bootstrap.min.css';

initialize({
  onUnhandledRequest: 'bypass',
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'friends-app',
    values: [
      {
        name: 'friends-app',
        value: '#E5E5E5',
      },
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = GlobalDecorators;