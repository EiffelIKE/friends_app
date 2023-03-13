import { useMemo } from 'react';
import { getInfoDetails } from '../../../shared/utils';

import type { DetailsData } from '../../../shared/types';

export const useGetInfo = (data: DetailsData | Record<string, never>) => {
  const detailInfo = useMemo(() => getInfoDetails(data), [data]);

  return { detailInfo };
};
