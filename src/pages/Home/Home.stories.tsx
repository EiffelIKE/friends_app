import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
// import { useEffect } from '@storybook/addons';
import { Home } from './Home';
import { getMock } from '../../../.storybook/mocks/hanlders';

// const WithRefresh: DecoratorFn = (StoryFn) => {
//   useEffect(() => {
//     return () => window.location.reload();
//   }, []);
//   return <StoryFn />;
// };

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
      error: null,
      loading: null,
      empty: null,
    },
  },
};

HomePage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const buttons = await canvas.findAllByRole('button');

  buttons.forEach((button, index) => {
    if (index !== 5) {
      expect(button).toBeDisabled();
    } else expect(button).toBeEnabled();
  });
};

// This was commented 'cause the storybook/test-runner throw error and test fail,
// due to the useEffect refreshing msw, there's no support in this current sb version for server.resetHandlers,
// so test-runner throw: the __test before wasn't available,
// to reproduce error, uncomment this stories
// and add the WithRefresh decorator to default's decorators list,
// and run yarn test-storybook || yarn coverage.
// reference error: https://github.com/storybookjs/test-runner/issues/68,
// This will be fixed on storybook 7

// export const LoadingHomePage = Template.bind({});

// LoadingHomePage.parameters = {
//   msw: {
//     handlers: {
//       default: null,
//       error: null,
//       empty: null,
//       loading: [getMock({ url: 'friends', loading: true })],
//     },
//   },
// };

// export const ErrorHomePage = Template.bind({});

// ErrorHomePage.parameters = {
//   msw: {
//     handlers: {
//       default: null,
//       loading: null,
//       empty: null,
//       error: [getMock({ url: 'friends', error: true })],
//     },
//   },
// };

// export const EmptyHomePage = Template.bind({});

// EmptyHomePage.parameters = {
//   msw: {
//     handlers: {
//       default: null,
//       loading: null,
//       error: null,
//       empty: [getMock({ url: 'friends', empty: true })],
//     },
//   },
// };

// export const NoDetailsResponse = Template.bind({});

// NoDetailsResponse.parameters = {
//   msw: {
//     handlers: {
//       default: null,
//       loading: null,
//       error: null,
//       empty: null,
//       noDetails: [
//         getMock({ url: 'friends' }),
//         getMock({ url: 'friends/id', loading: true })
//       ],
//     },
//   },
// };

// All buttons to be disabled with no response form /friends/id

// NoDetailsResponse.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const buttons = await canvas.findAllByRole('button');

//   buttons.forEach((button) => {
//     expect(button).toBeDisabled();
//   });
// };
