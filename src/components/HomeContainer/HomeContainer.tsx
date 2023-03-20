import { FC } from 'react';
import { FriendList } from '../FriendList';
import { SectionContainer } from '../SectionContainer';
import { Text } from '../Text';
import { InfoMessage } from '../InfoMessage';
import { LoadingFriendCard } from '../LoadingFriendCard';
import { FriendsContainer, TextRow, CardRow } from './styles';
import type { HomeContainerProps } from './types';

export const HomeContainer: FC<HomeContainerProps> = ({
  title,
  data,
  onClick,
  isLoading,
  isError,
  isDisabled,
}) => {
  const emptyData = data.length === 0 && !isLoading && !isError;

  return (
    <SectionContainer>
      <FriendsContainer>
        <TextRow>
          <Text isGray isTitle className="no-wrap">
            {title}
          </Text>
        </TextRow>
        <CardRow>
          {isError && <InfoMessage error info="Sorry, something went wrong" />}
          {isLoading && <LoadingFriendCard />}
          {emptyData && <InfoMessage info="Your friend list is empty" />}
          {data.length > 0 && !isLoading && (
            <FriendList data={data} onClick={onClick} isDisabled={isDisabled} />
          )}
        </CardRow>
      </FriendsContainer>
    </SectionContainer>
  );
};
