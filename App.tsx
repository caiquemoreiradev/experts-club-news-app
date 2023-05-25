import React from 'react';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes/app.stack.routes';
import { ApolloContextProvider } from './src/context/ApolloContext';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ApolloContextProvider>
      <ThemeProvider theme={theme}>

        <Routes />

      </ThemeProvider>
    </ApolloContextProvider>
  );
}
