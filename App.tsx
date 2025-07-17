import React from 'react';
import LanguageProvider from './src/context/LanguageProvider';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AppRoot from './src/AppRoot';
import { StatusBar, useColorScheme, SafeAreaView } from 'react-native';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView className="flex-1">
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <LanguageProvider>
          <AppRoot />
        </LanguageProvider>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
