import { ButtonProps as RButtonProps } from 'react-bootstrap/Button';

export interface ButtonProps extends Omit<RButtonProps, 'variant' | 'size'> {
  variant?: RButtonProps['variant'] | 'main' | 'secondary' | 'dark';
  size?: RButtonProps['size'];
}
