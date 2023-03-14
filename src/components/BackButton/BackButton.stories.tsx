import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect, jest } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { BackButton } from './BackButton';

const mockFn = jest.fn();

export default {
  title: 'Components/Atoms/BackButton',
  component: BackButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'dark'],
      control: { type: 'select' },
    },
    size: { control: { label: 'select' }, options: ['sm', 'lg', undefined] },
  },
} as ComponentMeta<typeof BackButton>;

const Template: ComponentStory<typeof BackButton> = ({
  variant,
  children,
  disabled,
  size,
  className,
  onBack,
}) => (
  <BackButton
    variant={variant}
    disabled={disabled}
    size={size}
    className={className || ''}
    onBack={onBack}
  >
    {children}
  </BackButton>
);

export const DefaultBackButton = Template.bind({});
DefaultBackButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-Test?node-id=1%3A1526&t=T3drl8qP0uDfuMcb-1',
  },
};

DefaultBackButton.args = {
  onBack: mockFn,
};

DefaultBackButton.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');

  userEvent.click(button);
  expect(mockFn).toBeCalled();
};
