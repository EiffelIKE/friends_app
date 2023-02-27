import { FC } from 'react';
import classNames from 'classnames';
import type { AvailabilityProps } from './types';

import './styles.scss';

export const Availability: FC<AvailabilityProps> = ({
  active,
  size = 'md',
  className,
}) => {
  return (
    <div
      className={classNames(`available ${className && className}`, {
        available__active: active,
        lg: size === 'lg',
        md: size === 'md',
      })}
    />
  );
};
