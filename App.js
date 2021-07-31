import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import NavigationScreen from './src/navigation';

import Reducer from './src/store/reducers';

const store = createStore(Reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
};

export default App;
