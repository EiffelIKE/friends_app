import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Home } from './Home';
import { getMock } from '../../../.storybook/mocks/hanlders';

export default {
  title: 'Components/Pages/Home',
  component: Home,
  decorators: [withRouter],
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const HomePage = Template.bind({});

HomePage.parameters = {
  msw: {
    handlers: {
      default: [getMock({ url: 'friends' }), getMock({ url: 'friends/id' })],
    },
  },
};

HomePage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttons = await canvas.findAllByRole('button');

  if (buttons.length > 0) {
    buttons.forEach((button, index, array) => {
      if (array[array.length - 1] !== button) {
        expect(button).toBeDisabled();
      }
    });
  }
  expect(buttons[buttons.length - 1]).toBeEnabled();
};

// export const LoadingHomePage = Template.bind({});

// LoadingHomePage.parameters = {
//   msw: {
//     handlers: {
//       default: null,
//       error: [getMock({ url: 'friends', error: true })],
//     },
//   },
// };
