import { useEffect, useState } from 'react';
import { Section, SectionContainer, Text, FriendList } from '../../components';
import { FriendsContainer, TextRow, CardRow } from './styles';
import { friendListMock } from '../../shared/const';

export const Home = () => {
  const [isLoading, setloading] = useState(true);
  const handleClick = (id: number) => {
    console.log(`Clicked ${id} friend's button`);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

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
              data={friendListMock}
              onClick={handleClick}
              isLoading={isLoading}
              isError={false}
            />
          </CardRow>
        </FriendsContainer>
      </SectionContainer>
    </Section>
  );
};
