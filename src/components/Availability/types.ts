export interface AvailabilityProps extends Availability {
  className?: string;
}

export interface Availability {
  active: boolean;
  size?: 'md' | 'lg';
}
