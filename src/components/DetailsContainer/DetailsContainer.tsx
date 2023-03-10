import { FC } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { FriendDetail } from '../FriendDetail';
import { BackButton, RelativeContainer } from './styles';
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
      <BackButton
        aria-label="back button"
        variant="secondary"
        className="icon"
        onClick={onBack}
      >
        <HiArrowLeft />
      </BackButton>
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
