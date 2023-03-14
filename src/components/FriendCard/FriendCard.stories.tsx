import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { jest, expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import friendImg from '../../assets/friends_photos/8-image.jpg';
import { FriendCard } from './FriendCard';

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
    src: friendImg,
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

ActiveFriend.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const fullName = canvas.getByText('Friend Name Goes Here');
  expect(fullName).toBeInTheDocument();

  const status = canvas.getByText('Friend Status here');
  expect(status).toBeInTheDocument();
};

export const NonActiveWithDisable = Template.bind({});

NonActiveWithDisable.args = {
  active: false,
  disabled: true,
};

export const EmptyNames = Template.bind({});

EmptyNames.args = {
  firstName: undefined,
  lastName: undefined,
};

export const ClickButton = Template.bind({});

const mockHanlder = jest.fn();

ClickButton.args = {
  onClick: mockHanlder,
};

ClickButton.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(/details/i);

  userEvent.click(button);
  expect(mockHanlder).toBeCalledTimes(1);
};
