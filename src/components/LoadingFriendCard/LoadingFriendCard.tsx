import { SkeletonFriendCard } from '../FriendCard';
import { Ul } from './styles';

export const LoadingFriendCard = () => {
  return (
    <Ul>
      {[1, 2, 3, 4].map((number) => {
        return (
          <li aria-label="friend-card-loading" key={number}>
            <SkeletonFriendCard />
          </li>
        );
      })}
    </Ul>
  );
};
