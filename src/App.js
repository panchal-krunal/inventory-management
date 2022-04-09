import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import Navigation from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        {/* <InventoryScreen /> */}
      </PersistGate>
    </Provider>
  );
}

export default App;