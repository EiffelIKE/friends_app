import { FC } from 'react';
import { FriendDetail } from '../FriendDetail';
import { StyledBackButton, RelativeContainer } from './styles';
import type { DetailsContainerProps } from './types';

export const DetailsContainer: FC<DetailsContainerProps> = ({
  onBack,
  tabsChildren,
  src,
  active,
  firstName,
  lastName,
  status,
  tabs,
}) => {
  return (
    <RelativeContainer>
      <StyledBackButton onBack={onBack} />
      <FriendDetail
        src={src}
        active={active}
        firstName={firstName}
        lastName={lastName}
        status={status}
        tabs={tabs}
        tabsChildren={tabsChildren}
      />
    </RelativeContainer>
  );
};
