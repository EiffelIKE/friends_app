import { FC } from 'react';
import type { ModalProps } from './types';
import { Container } from './styles';

export const ModalContainer: FC<ModalProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
