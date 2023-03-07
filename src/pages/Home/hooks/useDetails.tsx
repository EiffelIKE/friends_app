import { useEffect, useState, useCallback } from 'react';
import { useLazyGetDetailsQuery } from '../../../store/slices/useDetails';
import type { DetailsData } from '../../../shared/types';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks';
import { setDetails } from '../../../store/slices/detailSlice';

export const useDetails = () => {
  const [friendDetails, setFriendDetails] = useState<DetailsData>();
  const [getDetails, { data, isSuccess }] = useLazyGetDetailsQuery();
  const dispatch = useAppDispatch();

  const isDisabled = useCallback(
    (id: number) => {
      if (friendDetails && friendDetails.id) {
        return friendDetails.id !== id;
      }
      return true;
    },
    [friendDetails]
  );

  useEffect(() => {
    getDetails({});
  }, [getDetails]);

  useEffect(() => {
    if (data && isSuccess) {
      setFriendDetails(data);
      dispatch(setDetails(data));
    }
  }, [data, isSuccess, dispatch]);

  return { isDisabled };
};
