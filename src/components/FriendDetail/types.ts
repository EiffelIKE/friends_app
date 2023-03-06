import type { TabObj } from '../../shared/types';

export interface FriendsDetailsProps {
  src: string;
  firstName: string;
  lastName: string;
  active: boolean;
  status: string;
  tabs: Array<TabObj>;
  tabsChildren: Array<React.ReactNode>;
}
