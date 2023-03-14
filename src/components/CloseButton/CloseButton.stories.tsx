import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect, jest } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { CloseButton } from './CloseButton';

const mockFn = jest.fn();

export default {
  title: 'Components/Atoms/CloseButton',
  component: CloseButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'dark'],
      control: { type: 'select' },
    },
    size: { control: { label: 'select' }, options: ['sm', 'lg', undefined] },
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = ({
  variant,
  children,
  disabled,
  size,
  className,
  onClose,
}) => (
  <CloseButton
    variant={variant}
    disabled={disabled}
    size={size}
    className={className || ''}
    onClose={onClose}
  >
    {children}
  </CloseButton>
);

export const DefaultCloseButton = Template.bind({});

DefaultCloseButton.parameters = {
  backgrounds: {
    default: 'dark',
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A1526&t=T3drl8qP0uDfuMcb-1',
  },
};

DefaultCloseButton.args = {
  onClose: mockFn,
};

DefaultCloseButton.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');

  userEvent.click(button);
  expect(mockFn).toBeCalled();
};
