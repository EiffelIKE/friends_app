import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import { Button } from '../Button';
import type { CloseButtonProps } from './types';

export const CloseButton: FC<CloseButtonProps> = ({
  onClose,
  className,
  disabled,
  size,
  children,
  type,
  variant,
}) => {
  return (
    <Button
      aria-label="close button"
      variant={`${variant || 'dark'}`}
      className={`icon ${className || ''}`}
      onClick={onClose}
      type={type}
      size={size}
      disabled={disabled}
    >
      <IoClose />
      {children}
    </Button>
  );
};
