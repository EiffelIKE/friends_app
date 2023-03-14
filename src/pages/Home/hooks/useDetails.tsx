import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyGetDetailsQuery } from '../../../store/slices/useDetails';

import { useAppDispatch } from '../../../shared/hooks/reduxHooks';
import { setDetails } from '../../../store/slices/detailSlice';

export const useDetails = () => {
  const [getDetails, { data, isSuccess, isError, isLoading }] =
    useLazyGetDetailsQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getFriendDetails = (id: number) => getDetails(id);

  useEffect(() => {
    if (data && isSuccess && data.data) {
      dispatch(setDetails(data.data));
      navigate('/details');
    }
  }, [data, isSuccess, dispatch, navigate]);

  const isSuccessDetails = isSuccess;
  const isErrorDetails = isError;
  const isLoadingDetails = isLoading;

  return {
    getFriendDetails,
    isSuccessDetails,
    isErrorDetails,
    isLoadingDetails,
  };
};
