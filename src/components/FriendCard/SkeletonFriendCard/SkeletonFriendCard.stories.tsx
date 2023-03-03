import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { SkeletonFriendCard } from './SkeletonFriendCard';

const withContainer: DecoratorFn = (StoryFn) => {
  return (
    <div
      style={{
        width: '634px',
      }}
    >
      <StoryFn />
    </div>
  );
};

export default {
  title: 'Components/FriendCard/Skeleton',
  component: SkeletonFriendCard,
  decorators: [withContainer],
} as ComponentMeta<typeof SkeletonFriendCard>;

const Template: ComponentStory<typeof SkeletonFriendCard> = () => (
  <SkeletonFriendCard />
);

export const SkeletonCard = Template.bind({});
