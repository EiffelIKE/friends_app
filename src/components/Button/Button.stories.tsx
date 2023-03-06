import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HiArrowLeft } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';
import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'dark'],
      control: { type: 'select' },
    },
    size: { control: { label: 'select' }, options: ['sm', 'lg', undefined] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  variant,
  children,
  disabled,
  size,
  className,
}) => (
  <Button
    variant={variant}
    disabled={disabled}
    size={size}
    className={className || ''}
  >
    {children}
  </Button>
);

export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A626&t=pKGoto5mVt7XVhoA-1',
  },
};

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
};

export const DarkOpacity = Template.bind({});

DarkOpacity.args = {
  variant: 'dark',
  children: 'Details',
  disabled: false,
};

DarkOpacity.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Disabled = Template.bind({});

Disabled.parameters = {
  ...Primary.parameters,
};

Disabled.args = {
  variant: 'main',
  children: 'Details',
  disabled: true,
};

export const WithBackIconSecondary = Template.bind({});

WithBackIconSecondary.args = {
  variant: 'secondary',
  children: <HiArrowLeft />,
  disabled: false,
  className: 'icon',
};

WithBackIconSecondary.argTypes = {
  children: {
    control: { table: { disable: true } },
  },
};

WithBackIconSecondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A1526&t=T3drl8qP0uDfuMcb-1',
  },
};

export const WithCloseIconDark = Template.bind({});

WithCloseIconDark.args = {
  variant: 'dark',
  children: <IoIosClose />,
  disabled: false,
  className: 'icon',
};

WithCloseIconDark.argTypes = {
  ...WithBackIconSecondary.argTypes,
};

WithCloseIconDark.parameters = {
  ...WithBackIconSecondary.parameters,
  ...DarkOpacity.parameters,
};
