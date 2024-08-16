import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { cores } from './src/components/Cores';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Routes from './src/Routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor={cores.azulEscuro} barStyle="light-content" />
      <Routes />
    </GestureHandlerRootView>
  );
}
