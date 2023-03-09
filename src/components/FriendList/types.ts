import type { FriendData } from '../../shared/types';

export interface FriendListProps {
  data: Array<FriendData>;
  isLoading: boolean;
  isError: boolean;
  onClick: () => void;
  isDisabled: (id: number) => boolean;
}
