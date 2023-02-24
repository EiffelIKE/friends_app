/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, ForwardRefExoticComponent } from 'react';
import RButton, { ButtonProps as RButtonProps } from 'react-bootstrap/Button';
import styled, { css } from 'styled-components';

interface ButtonProps extends Omit<RButtonProps, 'variant' | 'size'> {
  variant?: RButtonProps['variant'] | 'main' | 'secondary';
  size?: RButtonProps['size'] | 'big';
}

const textStyle = css`
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
`;

const mainStyle = css`
  background-color: ${(props) => props.theme.colors.primary.primaryBlue50};
  border-color: ${(props) => props.theme.colors.primary.primaryBlue60};
  color: ${(props) => props.theme.colors.white};
`;

const disableStyle = css`
  background-color: ${(props) => props.theme.colors.grayScale.gray50};
  border-color: ${(props) => props.theme.colors.grayScale.gray30};
  color: ${(props) => props.theme.colors.grayScale.gray60};
`;

const StyledButton = styled(RButton)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 93px;
  padding: 8px 20px;
  &.btn-main {
    ${mainStyle}
    ${textStyle}
    border-radius: 4px;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary.primaryBlue60};
    }
    &:active {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.primary.primaryBlue70};
      border-color: ${(props) => props.theme.colors.primary.primaryBlue60};
    }
  }

  &.btn-secondary {
    background-color: ${(props) => props.theme.colors.white};
    border: none;
    color: ${(props) => props.theme.colors.primary.primaryBlue50};
    height: 44px;
    padding: 10px;
    border-radius: 8px;
    transition: filter 300ms;
  }
  &:hover {
    filter: brightness(1.2);
  }

  :disabled {
    ${disableStyle}
  }

  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Button: ForwardRefExoticComponent<ButtonProps> =
  forwardRef<ButtonProps>((props, ref) => {
    return <StyledButton {...props} ref={ref} />;
  });

Button.displayName = 'Button';
