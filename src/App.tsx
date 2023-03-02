import { FriendThemeProvider } from './Theme';
import { Router } from './routes';

function App() {
  return (
    <FriendThemeProvider>
      <Router />
    </FriendThemeProvider>
  );
}

export default App;
