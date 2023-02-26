import styled from 'styled-components';
import { FriendThemeProvider } from './Theme';
import { Button, Text, Availability } from './components';

const ContainerApp = styled.div`
  display: grid;
  place-content: center;
  grid-gap: 2rem;
  width: 100vw;
  height: 100vh;
  font-family: Inter;
`;

function App() {
  return (
    <FriendThemeProvider>
      <ContainerApp className="App">
        <Text isGray isTitle>
          Friends
        </Text>
        <Availability active size="lg" />
        <Button variant="main"> Details</Button>
      </ContainerApp>
    </FriendThemeProvider>
  );
}

export default App;
