import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { FriendThemeProvider } from './Theme';
import {
  Text,
  Section,
  SectionContainer,
  ScrollRow,
  FriendCard,
} from './components';

const FriendsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 714px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
`;

const TextRow = styled(Row)`
  margin-top: 30px;
  margin-left: 0;
  margin-right: 0;
  padding: 0 40px;
  overflow: hidden;
  & > * {
    padding: 0;
  }
  @media screen and (max-width: 400px) {
    padding: 0 30px;
  }
`;

const CardList = styled(ScrollRow)`
  gap: 14px;
  margin-left: 0;
  margin-right: 0;
  padding: 0 40px 30px;
  max-height: 555px;
  @media screen and (max-width: 576px) {
    max-height: none;
  }
  @media screen and (max-width: 400px) {
    padding: 0 30px 30px;
  }
`;

const handleClick = (id: number) => {
  console.log(`Clicked ${id} friend's button`);
};

function App() {
  return (
    <FriendThemeProvider>
      <Section>
        <SectionContainer>
          <FriendsContainer>
            <TextRow>
              <Text isGray isTitle>
                {' '}
                Friends
              </Text>
            </TextRow>
            <CardList>
              {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                return (
                  <FriendCard
                    key={item}
                    active
                    src="https://reqres.in/img/faces/8-image.jpg"
                    id={item}
                    fullName="Friend FullNameasdasdasdasdasdasdasdasdasdasd"
                    text="Friend Statusasdasdasdasdasdasdasdasdasdasdasdasdasds"
                    onClick={handleClick}
                  />
                );
              })}
            </CardList>
          </FriendsContainer>
        </SectionContainer>
      </Section>
    </FriendThemeProvider>
  );
}

export default App;
