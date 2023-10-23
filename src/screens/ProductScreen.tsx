import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MainStackParamsList } from '../types';
import { MainNavigation } from '../constants/navigation';
import { colors } from '../constants/theme';

type IProductScreenProps = StackScreenProps<
  MainStackParamsList,
  MainNavigation.PRODUCT
>;

export const ProductScreen: React.FC<IProductScreenProps> = ({ route }) => {
  const { product } = route.params;
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={{ uri: product.photo }} style={styles.photo} />
        <Text style={styles.title}>{product.title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  title: {
    color: colors.lightGray,
    fontSize: 24,
  },
  photo: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
});
