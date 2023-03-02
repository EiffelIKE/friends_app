import type { FriendData } from '../../shared/types';

export interface FriendListProps {
  data: Array<FriendData>;
  onClick: (id: number) => void;
}
