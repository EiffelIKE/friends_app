import { FC } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Button } from '../Button';
import type { BackButtonProps } from './types';

export const BackButton: FC<BackButtonProps> = ({
  onBack,
  className,
  disabled,
  size,
  children,
  type,
  variant,
}) => {
  return (
    <Button
      aria-label="back button"
      variant={`${variant || 'secondary'}`}
      className={`icon ${className || ''}`}
      onClick={onBack}
      type={type}
      size={size}
      disabled={disabled}
    >
      <HiArrowLeft />
      {children}
    </Button>
  );
};
