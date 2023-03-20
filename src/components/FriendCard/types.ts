export interface FriendCardProps {
  active: boolean;
  src?: string;
  id: number;
  firstName: string;
  lastName: string;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}
