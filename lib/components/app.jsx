import React from 'react';
import { Provider } from 'react-redux';
import Tabs from './tabs';

const App = props => {
  return(
    <Provider store={ props.store }>
      <Tabs />
    </Provider>
  );
};

export default App;
