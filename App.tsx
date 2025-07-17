import React from 'react';
import { StatusBar, useColorScheme, View, Text } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="flex-1">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text className="text-red-600 text-6xl">Balaji</Text>
    </View>
  );
}

export default App;
