import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Section, SectionContainer, Text, FriendList } from '../../components';
import { FriendsContainer, TextRow, CardRow } from './styles';
import { useFriends, useDetails } from './hooks';

export const Home = () => {
  const { friends, isLoading, isError } = useFriends();
  const { isDisabled } = useDetails();
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate('/details'), [navigate]);

  return (
    <Section>
      <SectionContainer>
        <FriendsContainer>
          <TextRow>
            <Text isGray isTitle>
              {' '}
              Friends
            </Text>
          </TextRow>
          <CardRow>
            <FriendList
              data={friends}
              onClick={handleClick}
              isLoading={isLoading}
              isError={isError}
              isDisabled={isDisabled}
            />
          </CardRow>
        </FriendsContainer>
      </SectionContainer>
    </Section>
  );
};
