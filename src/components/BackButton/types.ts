import { MouseEventHandler } from 'react';
import { ButtonProps } from '../Button/types';

export interface BackButtonProps extends ButtonProps {
  onBack: MouseEventHandler<HTMLButtonElement>;
}
