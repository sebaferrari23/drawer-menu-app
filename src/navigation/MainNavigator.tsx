import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen } from '../screens/ProductsScreen';
import { ProductScreen } from '../screens/ProductScreen';
import { MainNavigation } from '../constants/navigation';

const screenOptions = { headerShown: false };

export const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={MainNavigation.PRODUCTS} component={ProductsScreen} />
      <Stack.Screen name={MainNavigation.PRODUCT} component={ProductScreen} />
    </Stack.Navigator>
  );
};
