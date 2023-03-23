import { FC } from 'react';
import { FriendCard } from '../FriendCard';

import { Ul } from './styles';
import type { FriendListProps } from './types';

export const FriendList: FC<FriendListProps> = ({
  data,
  onClick,
  isDisabled,
}) => {
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
              disabled={isDisabled && isDisabled(item.id)}
            />
          </li>
        );
      })}
    </Ul>
  );
};
