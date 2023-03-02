import { FC } from 'react';
import type { FriendListProps } from './types';
import { FriendCard } from '../FriendCard';

export const FriendList: FC<FriendListProps> = ({ data, onClick }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <FriendCard
            key={item.id}
            active={item.available}
            src={item.img}
            id={item.id}
            firstName={item.first_name}
            lastName={item.last_name}
            text={item.status}
            onClick={() => onClick(item.id)}
            disabled={false}
          />
        );
      })}
    </>
  );
};
