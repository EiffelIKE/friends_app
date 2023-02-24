import { ThemeProvider, withBackground } from './decorators';
import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [ ThemeProvider, withBackground ]
