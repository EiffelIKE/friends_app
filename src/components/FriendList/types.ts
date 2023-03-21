import type { FriendData } from '../../shared/types';

export interface FriendListProps {
  data: Array<FriendData>;
  onClick: () => void;
  isDisabled?: (id: number) => boolean;
}
