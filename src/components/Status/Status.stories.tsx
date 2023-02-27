import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { Status as StatusComponent } from './Status';

const statusContainer: DecoratorFn = (StoryFn) => {
  return (
    <div
      style={{
        width: '300px',
      }}
    >
      <StoryFn />
    </div>
  );
};

export default {
  title: 'Components/Status',
  component: StatusComponent,
} as ComponentMeta<typeof StatusComponent>;

const Template: ComponentStory<typeof StatusComponent> = ({ text }) => (
  <StatusComponent text={text} />
);

export const NormalStatus = Template.bind({});

NormalStatus.args = {
  text: 'User Status Goes Here',
};

export const OverflowStatus = Template.bind({});

OverflowStatus.decorators = [statusContainer];

OverflowStatus.args = {
  text: 'User Status Goes Here and this is a big status with lot of characters and the decorator has 300px width ',
};
