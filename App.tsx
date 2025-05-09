// export default App;
import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
// import {store} from './src/reduxToolkit/store';
import {store} from './src/reduxToolkit/Store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
