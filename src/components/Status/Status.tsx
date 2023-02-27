import { FC } from 'react';
import { StatusContainer } from './styles';
import type { StatusProps } from './types';

export const Status: FC<StatusProps> = ({ text, className, children }) => {
  return (
    <StatusContainer className={className && className}>
      <p title={text}>{text}</p>
      {children}
    </StatusContainer>
  );
};
