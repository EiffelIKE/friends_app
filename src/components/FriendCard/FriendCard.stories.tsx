import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { FriendCard } from './FriendCard';
import friendImg from '../../assets/friends_photos/8-image.jpg';

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
  title: 'Components/Molecules/FriendCard',
  component: FriendCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A659&t=Py24SrfEEQgOYLSF-1',
    },
  },
  decorators: [withContainer],
  args: {
    src: 'https://reqres.in/img/faces/8-image.jpg',
    id: 1,
    firstName: 'Friend Name',
    lastName: 'Goes Here',
    text: 'Friend Status here',
    active: true,
    disabled: false,
  },
} as ComponentMeta<typeof FriendCard>;

const Template: ComponentStory<typeof FriendCard> = ({
  active,
  src,
  id,
  firstName,
  lastName,
  text,
  disabled,
  onClick,
}) => (
  <FriendCard
    active={active}
    src={src}
    disabled={disabled}
    id={id}
    text={text}
    onClick={onClick}
    firstName={firstName}
    lastName={lastName}
  />
);

export const ActiveFriend = Template.bind({});

export const NonActiveWithDisable = Template.bind({});

NonActiveWithDisable.args = {
  active: false,
  disabled: true,
};
