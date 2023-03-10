import { useEffect, useState } from 'react';
import { useLazyGetFriendsQuery } from '../../../store/slices/useFriendsSlice';

import type { FriendData } from '../../../shared/types';

export const useFriends = () => {
  const [friends, setFriends] = useState<Array<FriendData>>([]);
  const [getFriends, { data, isSuccess, isLoading, isError }] =
    useLazyGetFriendsQuery();

  useEffect(() => {
    getFriends({});
  }, [getFriends]);

  useEffect(() => {
    if (data && isSuccess) {
      setFriends(data);
    }
  }, [data, isSuccess]);

  return { friends, isLoading, isError };
};
