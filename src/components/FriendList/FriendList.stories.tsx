import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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
  decorators: [withContainer],
} as ComponentMeta<typeof FriendList>;

const Template: ComponentStory<typeof FriendList> = ({
  data,
  onClick,
  isDisabled,
}) => <FriendList data={data} onClick={onClick} isDisabled={isDisabled} />;

export const DefaultState = Template.bind({});

DefaultState.args = {
  data: friendListMock,
  isDisabled: () => false,
};

DefaultState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cards = await canvas.findAllByRole('listitem', { name: 'friend-card' });

  expect(cards).toHaveLength(6);
};
