/** @format */
import { StatusBar } from 'react-native';
import React, { memo, useRef } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { DrawerNavigator } from './navigation/DrawerNavigator';

const NAVIGATION_THEME = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    border: 'transparent',
    card: 'transparent',
  },
};

export const App = memo(() => {
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef} theme={NAVIGATION_THEME}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <DrawerNavigator />
    </NavigationContainer>
  );
});
