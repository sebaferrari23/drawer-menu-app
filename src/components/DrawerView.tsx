import React from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { colors } from '../constants/theme';

type IDrawerViewProps = {
  children: JSX.Element;
};

export const DrawerView: React.FC<IDrawerViewProps> = ({ children }) => {
  const drawerProgress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, -8]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 50]);
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 80]);
    return {
      transform: [{ rotate: `${rotate}deg` }, { translateX }, { translateY }],
    };
  });

  return (
    <Animated.View
      style={[
        animatedStyle,
        { flex: 1, borderRadius: 40, backgroundColor: colors.white },
      ]}>
      {children}
    </Animated.View>
  );
};
