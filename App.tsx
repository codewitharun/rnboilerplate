import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
