import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import { HomeContainer } from './HomeContainer';
import { DefaultState } from '../FriendList/FriendList.stories';

const mockClick = jest.fn();

export default {
  title: 'Components/Molecules/HomeContainer',
  component: HomeContainer,
} as ComponentMeta<typeof HomeContainer>;

const Template: ComponentStory<typeof HomeContainer> = ({
  data,
  isLoading,
  isError,
  isDisabled,
  title,
}) => (
  <HomeContainer
    data={data}
    onClick={mockClick}
    isLoading={isLoading}
    isError={isError}
    isDisabled={isDisabled}
    title={title}
  />
);

export const DefaultHome = Template.bind({});

DefaultHome.args = {
  title: 'Title goes here',
  ...DefaultState.args,
};

DefaultHome.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttons = canvas.getAllByRole('button');

  buttons.forEach((button) => {
    userEvent.click(button);
  });

  expect(mockClick).toBeCalledTimes(6);
};

export const LoadingHome = Template.bind({});

LoadingHome.args = {
  title: 'Friends',
  isLoading: true,
  data: [],
};

export const ErrorHome = Template.bind({});

ErrorHome.args = {
  title: 'Friends',
  data: [],
  isError: true,
};

export const OverflowTitle = Template.bind({});

OverflowTitle.args = {
  ...DefaultState.args,
  title: 'Some big title to test overflow and no-wrap className',
};
