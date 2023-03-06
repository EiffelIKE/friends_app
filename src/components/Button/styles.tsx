import styled, { css } from 'styled-components';
import RButton from 'react-bootstrap/Button';
import type { ButtonProps } from './types';

const textStyle = css`
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
`;

const mainStyle = css`
  background-color: ${({ theme }) => theme.colors.primary.primaryBlue50};
  border-color: ${({ theme }) => theme.colors.primary.primaryBlue60};
  color: ${({ theme }) => theme.colors.white};
`;

const disableStyle = css`
  background-color: ${({ theme }) => theme.colors.grayScale.gray50};
  border-color: ${({ theme }) => theme.colors.grayScale.gray30};
  color: ${({ theme }) => theme.colors.grayScale.gray60};
`;

const secondaryStyle = css`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.primary.primaryBlue50};
`;

export const StyledButton = styled(RButton)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  &.btn-main {
    ${mainStyle}
    ${textStyle}
    border-radius: 4px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.primaryBlue60};
    }

    &:active {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary.primaryBlue70};
      border-color: ${({ theme }) => theme.colors.primary.primaryBlue60};
    }
  }

  &.btn-secondary {
    ${secondaryStyle}
    transition: filter 300ms;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grayScale.gray70};
      border: 1px solid ${({ theme }) => theme.colors.grayScale.gray75};
    }
  }

  &.btn-dark {
    background-color: ${({ theme }) => theme.colors.darkOpacity};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }

  &:hover {
    filter: brightness(1.2);
  }

  :disabled {
    ${disableStyle}
  }

  &.btn-sm {
    padding: 0.25rem 0.5rem;
  }

  &.btn-lg {
    padding: 10px;
  }

  &.icon {
    padding: 10px;
    border-radius: 8px;
  }

  @media screen and (max-width: 490px) {
    width: 100%;
    padding: 20px;
    &.icon {
      padding: 10px;
    }
  }
`;
