import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { FriendThemeProvider } from './Theme';
import { Router } from './routes';
import { store } from './store';
import { FallBack } from './components';

function App() {
  return (
    <Suspense fallback={<FallBack />}>
      <Provider store={store}>
        <FriendThemeProvider>
          <Router />
        </FriendThemeProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
