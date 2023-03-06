import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { FriendList } from './FriendList';
import { friendListMock } from '../../shared/const';

const withContainer: DecoratorFn = (StoryFn) => {
  return (
    <div
      style={{
        width: '634px',
        height: '100%',
      }}
    >
      <StoryFn />
    </div>
  );
};

export default {
  title: 'Components/Molecules/FriendList',
  component: FriendList,
  args: {
    data: friendListMock,
  },
  decorators: [withContainer],
} as ComponentMeta<typeof FriendList>;

const Template: ComponentStory<typeof FriendList> = ({
  data,
  onClick,
  isLoading,
  isError,
}) => (
  <FriendList
    data={data}
    onClick={onClick}
    isLoading={isLoading}
    isError={isError}
  />
);

export const DefaultState = Template.bind({});

DefaultState.args = {
  isLoading: false,
  isError: false,
};

export const LoadingState = Template.bind({});

LoadingState.args = {
  data: [],
  isLoading: true,
  isError: false,
};

export const ErrorState = Template.bind({});

ErrorState.args = {
  data: [],
  isLoading: false,
  isError: true,
};

export const EmptyState = Template.bind({});

EmptyState.args = {
  data: [],
  isLoading: false,
  isError: false,
};
