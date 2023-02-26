import { FC, useMemo } from 'react';
import type { AvailabilityProps } from './types';
import { getStyledAvailability } from './styles';

export const Availability: FC<AvailabilityProps> = ({
  active,
  size = 'md',
  className,
}) => {
  const Available = useMemo(() => {
    return getStyledAvailability({ size, active });
  }, [active, size]);
  return <Available className={className} />;
};
