import { FC } from 'react';
import { FriendCard } from '../FriendCard';
import { InfoMessage } from '../InfoMessage';
import { LoadingFriendCard } from '../LoadingFriendCard';
import { Ul } from './styles';
import type { FriendListProps } from './types';

export const FriendList: FC<FriendListProps> = ({
  data,
  onClick,
  isLoading,
  isError,
  isDisabled,
}) => {
  if (isError) {
    return <InfoMessage error info="Sorry, something went wrong" />;
  }

  if (isLoading) {
    return <LoadingFriendCard />;
  }

  if (data && data.length === 0) {
    return <InfoMessage info="Your friend list is empty" />;
  }

  return (
    <Ul>
      {data.map((item) => {
        return (
          <li aria-label="friend-card" key={item.id}>
            <FriendCard
              active={item.available}
              src={item.img}
              id={item.id}
              firstName={item.first_name}
              lastName={item.last_name}
              text={item.status}
              onClick={() => onClick && onClick()}
              disabled={isDisabled(item.id)}
            />
          </li>
        );
      })}
    </Ul>
  );
};
