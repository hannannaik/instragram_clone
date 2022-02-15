import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { Store } from './store';

const Main = () => {
  return (
    <Provider store={Store}>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
