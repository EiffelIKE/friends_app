import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { label: 'select' },
      options: ['primary', 'secondary'],
    },
    size: { control: { label: 'select' }, options: ['sm', 'lg', undefined] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  variant,
  children,
  disabled,
  size,
}) => (
  <Button variant={variant} disabled={disabled} size={size && size}>
    {children}
  </Button>
);

export const Primary = Template.bind({});

Primary.args = {
  variant: 'main',
  children: 'Details',
  disabled: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Details',
  disabled: false,
  size: 'lg',
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: 'main',
  children: 'Details',
  disabled: true,
};
