import React from 'react';
import { StatusBar } from 'react-native';
import { cores } from './src/components/Cores';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={cores.azulEscuro} barStyle="ligth-content" />
      <Routes />
    </NavigationContainer>
  );
}

