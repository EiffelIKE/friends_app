import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import { LoadingFriendCard } from './LoadingFriendCard';

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
  title: 'Components/Molecules/LoadingFriendCard',
  component: LoadingFriendCard,
  decorators: [withContainer],
} as ComponentMeta<typeof LoadingFriendCard>;

const Template: ComponentStory<typeof LoadingFriendCard> = () => (
  <LoadingFriendCard />
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const skeletons = await canvas.findAllByRole('listitem', {
    name: 'friend-card-loading',
  });

  expect(skeletons).toHaveLength(4);
};
