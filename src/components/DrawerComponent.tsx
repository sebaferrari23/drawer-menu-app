import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { colors } from '../constants/theme';

export const DrawerComponent = (props: DrawerContentComponentProps) => {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [1, 60]);
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[styles.main, animatedStyle]}>
      <View style={styles.container}>
        <DrawerContentScrollView {...props}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Beka</Text>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: colors.darkBlue,
    borderTopLeftRadius: 40,
  },
  container: {
    width: '55%',
    flex: 1,
    paddingHorizontal: 12,
  },
  titleWrapper: {
    marginBottom: 46,
    marginTop: 32,
  },
  title: {
    color: colors.white,
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
  },
});
