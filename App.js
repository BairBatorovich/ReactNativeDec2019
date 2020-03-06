import React from 'react';
import AppContainer from './navigation/navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
