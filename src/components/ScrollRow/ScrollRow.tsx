import { FC } from 'react';
import { RowProps } from 'react-bootstrap';
import { StyledRow } from './styles';

export const ScrollRow: FC<RowProps> = ({ children, className, styles }) => {
  return (
    <StyledRow styles={styles} className={className && className}>
      {children}
    </StyledRow>
  );
};
