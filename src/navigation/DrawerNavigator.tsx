import React from 'react';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { DrawerComponent } from '../components/DrawerComponent';
import { TabNavigator } from './TabNavigator';
import { colors } from '../constants/theme';
import { DrawerNavigation } from '../constants/navigation';

export const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const drawerOptions: DrawerNavigationOptions = {
    drawerStyle: {
      width: '50%',
    },
    drawerLabelStyle: {
      fontSize: 22,
      fontWeight: '400',
    },
    drawerItemStyle: {
      borderRadius: 12,
      paddingHorizontal: 12,
      marginBottom: 16,
    },
    drawerActiveTintColor: colors.lightOrange,
    drawerInactiveTintColor: colors.white,
    drawerActiveBackgroundColor: 'rgba(201, 107, 103, 0.2)',
    drawerType: 'back',
    overlayColor: 'transparent',
    headerShown: false,
  };

  return (
    <Drawer.Navigator
      screenOptions={drawerOptions}
      drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name={DrawerNavigation.START} component={TabNavigator} />
    </Drawer.Navigator>
  );
};
