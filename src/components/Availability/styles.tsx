import styled, { css } from 'styled-components';
import type { Availability } from './types';

const sizes = {
  md: css`
    width: 12px;
    height: 12px;
    border: 2px solid ${({ theme }) => theme.colors.white};
  `,
  lg: css`
    width: 23px;
    height: 23px;
    border: 4px solid ${({ theme }) => theme.colors.white};
  `,
};

export const getStyledAvailability = ({
  size,
  active,
}: Availability) => styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) =>
    active ? theme.colors.active : theme.colors.grayScale.gray70};
  ${size && sizes[size]}
`;
