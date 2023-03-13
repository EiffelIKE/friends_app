import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { useEffect } from '@storybook/addons';
import { Home } from './Home';
import { getMock } from '../../../.storybook/mocks/hanlders';

const WithRefresh: DecoratorFn = (StoryFn) => {
  useEffect(() => {
    return () => window.location.reload();
  }, []);
  return <StoryFn />;
};

export default {
  title: 'Components/Pages/Home',
  component: Home,
  decorators: [withRouter, WithRefresh],
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const HomePage = Template.bind({});

HomePage.parameters = {
  msw: {
    handlers: {
      default: [getMock({ url: 'friends' }), getMock({ url: 'friends/id' })],
      error: null,
      loading: null,
    },
  },
};

export const LoadingHomePage = Template.bind({});

LoadingHomePage.parameters = {
  msw: {
    handlers: {
      default: null,
      error: null,
      empty: null,
      loading: [getMock({ url: 'friends', loading: true })],
    },
  },
};

export const ErrorHomePage = Template.bind({});

ErrorHomePage.parameters = {
  msw: {
    handlers: {
      default: null,
      loading: null,
      empty: null,
      error: [getMock({ url: 'friends', error: true })],
    },
  },
};

export const EmptyHomePage = Template.bind({});

EmptyHomePage.parameters = {
  msw: {
    handlers: {
      default: null,
      loading: null,
      error: null,
      empty: [getMock({ url: 'friends', empty: true })],
    },
  },
};
