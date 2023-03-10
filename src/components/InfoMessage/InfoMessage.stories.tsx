import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InfoMessage } from './InfoMessage';

export default {
  title: 'Components/Molecules/InfoMessage',
  component: InfoMessage,
} as ComponentMeta<typeof InfoMessage>;

const Template: ComponentStory<typeof InfoMessage> = ({ error, info }) => (
  <InfoMessage error={error} info={info} />
);

export const Info = Template.bind({});

Info.args = {
  error: false,
  info: 'Some Info message',
};

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
  error: true,
  info: 'Error message',
};
