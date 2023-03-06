import type { FriendData } from '../../shared/types';

export interface FriendListProps {
  data: Array<FriendData>;
  isLoading: boolean;
  isError: boolean;
  onClick: (id: number) => void;
}
