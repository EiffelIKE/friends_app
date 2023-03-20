import type { FriendListProps } from '../FriendList/types';

export interface HomeContainerProps extends FriendListProps {
  title: string;
  isError: boolean;
  isLoading: boolean;
}
