import { FC } from 'react';
import { FriendList } from '../FriendList';
import { SectionContainer } from '../SectionContainer';
import { Text } from '../Text';
import { FriendsContainer, TextRow, CardRow } from './styles';
import type { FriendListProps } from '../FriendList/types';
import { InfoMessage } from '../InfoMessage';
import { LoadingFriendCard } from '../LoadingFriendCard';

export interface HomeContainerProps extends FriendListProps {
  title: string;
  isError: boolean;
  isLoading: boolean;
}

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
