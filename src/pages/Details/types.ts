import type { DetailsData } from '../../shared/types';

export interface DetailsProps {
  data: DetailsData | Record<string, never>;
}
