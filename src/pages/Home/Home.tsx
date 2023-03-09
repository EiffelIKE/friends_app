import { Section, SectionContainer, Text, FriendList } from '../../components';
import { FriendsContainer, TextRow, CardRow } from './styles';
import { useFriends, useDetails } from './hooks';
import { useAppNavigation } from '../../shared/hooks';

export const Home = () => {
  const { friends, isLoading, isError } = useFriends();
  const { isDisabled } = useDetails();
  const { navigation } = useAppNavigation();

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
              onClick={() => navigation('/details')}
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
