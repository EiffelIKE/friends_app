import type { FriendData } from '../../shared/types';

export interface FriendListProps {
  data: Array<FriendData>;
  onClick: CallableFunction;
  isDisabled?: (id: number) => boolean;
}
