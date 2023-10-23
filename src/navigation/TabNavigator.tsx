import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../constants/theme';
import { ContactScreen } from '../screens/ContactScreen';
import { DrawerView } from '../components/DrawerView';
import { TabsNavigation } from '../constants/navigation';
import { MainNavigator } from './MainNavigator';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <DrawerView>
      <Tab.Navigator
        initialRouteName={'Start'}
        screenOptions={({ navigation }) => ({
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: '400',
            letterSpacing: 3,
            color: '#909099',
            textTransform: 'uppercase',
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ marginHorizontal: 24 }}
                onPress={() => navigation.toggleDrawer()}>
                <FontAwesomeIcon size={25} icon={faBars} color={'#DFDFDF'} />
              </TouchableOpacity>
            );
          },
          tabBarLabelStyle: {
            textTransform: 'uppercase',
          },
          tabBarInactiveTintColor: '#909099',
          tabBarActiveTintColor: colors.lightOrange,
          tabBarItemStyle: {
            borderRadius: 40,
          },
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
        })}
        tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen
          name={TabsNavigation.HOME}
          component={MainNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesomeIcon
                icon={faHome}
                color={focused ? colors.lightOrange : colors.lightGray}
              />
            ),
          }}
        />
        <Tab.Screen
          name={TabsNavigation.CONTACT}
          component={ContactScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesomeIcon
                icon={faEnvelope}
                color={focused ? colors.lightOrange : colors.lightGray}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </DrawerView>
  );
};
