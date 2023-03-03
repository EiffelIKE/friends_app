import { Suspense } from 'react';
import { FriendThemeProvider } from './Theme';
import { Router } from './routes';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FriendThemeProvider>
        <Router />
      </FriendThemeProvider>
    </Suspense>
  );
}

export default App;
