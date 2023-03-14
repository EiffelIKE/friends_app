import { MouseEventHandler } from 'react';
import { ButtonProps } from '../Button/types';

export interface CloseButtonProps extends ButtonProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}
