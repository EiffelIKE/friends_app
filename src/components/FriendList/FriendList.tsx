import { FC } from 'react';
import type { FriendListProps } from './types';
import { FriendCard, SkeletonFriendCard } from '../FriendCard';
import { Text } from '../Text';
import { Ul, MessageContainer, WarningIcon } from './styles';

export const FriendList: FC<FriendListProps> = ({
  data,
  onClick,
  isLoading,
  isError,
}) => {
  if (isError) {
    return (
      <MessageContainer>
        <WarningIcon />
        <Text>Sorry, something went wrong.</Text>
      </MessageContainer>
    );
  }

  if (isLoading) {
    return (
      <Ul>
        {[1, 2, 3, 4].map((number) => {
          return (
            <li key={number}>
              <SkeletonFriendCard />
            </li>
          );
        })}
      </Ul>
    );
  }

  if (data.length === 0) {
    return (
      <MessageContainer>
        <Text>Your friend list is empty.</Text>
      </MessageContainer>
    );
  }

  return (
    <Ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <FriendCard
              active={item.available}
              src={item.img}
              id={item.id}
              firstName={item.first_name}
              lastName={item.last_name}
              text={item.status}
              onClick={() => onClick && onClick(item.id)}
              disabled={false}
            />
          </li>
        );
      })}
    </Ul>
  );
};
