import { FC } from 'react';
import { StyledDiv } from './styles';
import type { SectionContainerProps } from './types';

export const SectionContainer: FC<SectionContainerProps> = ({
  className,
  children,
}) => {
  return <StyledDiv className={className || ''}>{children}</StyledDiv>;
};
