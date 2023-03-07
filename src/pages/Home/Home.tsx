import { useEffect, useState } from 'react';
import { Section, SectionContainer, Text, FriendList } from '../../components';
import { FriendsContainer, TextRow, CardRow } from './styles';
import { friendListMock } from '../../shared/const';
import { useLazyGetFriendsQuery } from '../../store/slices/useFriendsSlice';
import { useLazyGetDetailsQuery } from '../../store/slices/useDetails';

export const Home = () => {
  const [isLoading, setloading] = useState(true);

  const [getFriends, { data, isSuccess }] = useLazyGetFriendsQuery();
  const [getDetails, { data: detailsData }] = useLazyGetDetailsQuery();
  const handleClick = (id: number) => {
    console.log(`Clicked ${id} friend's button`);
  };

  useEffect(() => {
    getFriends({});
  }, [getFriends]);

  useEffect(() => {
    getDetails({});
  }, [getDetails]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (detailsData) {
      console.log(detailsData);
    }
  }, [detailsData]);

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
