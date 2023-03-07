import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { FriendThemeProvider } from './Theme';
import { Router } from './routes';
import { store } from './store';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <FriendThemeProvider>
          <Router />
        </FriendThemeProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
