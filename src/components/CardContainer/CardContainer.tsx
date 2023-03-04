import { FC } from 'react';
import { DivContainer } from './styles';
import type { CardContainerProps } from './types';

export const CardContainer: FC<CardContainerProps> = ({
  className,
  children,
}) => {
  return <DivContainer className={className || ''}>{children}</DivContainer>;
};
