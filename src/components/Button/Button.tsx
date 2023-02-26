/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, ForwardRefExoticComponent } from 'react';
import type { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button: ForwardRefExoticComponent<ButtonProps> =
  forwardRef<ButtonProps>((props, ref) => {
    return <StyledButton {...props} ref={ref} />;
  });

Button.displayName = 'Button';
