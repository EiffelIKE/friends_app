import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';
import './styles.scss';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({
  isGray,
  isTitle,
  disabled,
  children,
}) => (
  <Text isGray={isGray} isTitle={isTitle} disabled={disabled}>
    {children}
  </Text>
);

export const Titles = Template.bind({});

Titles.args = {
  isGray: true,
  children: 'Friens App',
  disabled: false,
  isTitle: true,
};
Titles.decorators = [];

export const Common = Template.bind({});

Common.args = {
  isGray: false,
  children: 'Some example text',
  isTitle: false,
  disabled: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  isGray: false,
  children: 'Some example text',
  isTitle: false,
  disabled: true,
};
