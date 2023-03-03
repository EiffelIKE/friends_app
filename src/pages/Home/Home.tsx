import {
  Section,
  SectionContainer,
  Text,
  FriendList,
  SkeletonFriendCard,
} from '../../components';
import { FriendsContainer, TextRow, CardRow } from './styles';
import { friendListMock } from '../../shared/const';

export const Home = () => {
  const handleClick = (id: number) => {
    console.log(`Clicked ${id} friend's button`);
  };

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
            <SkeletonFriendCard />
            <FriendList data={friendListMock} onClick={handleClick} />
          </CardRow>
        </FriendsContainer>
      </SectionContainer>
    </Section>
  );
};
