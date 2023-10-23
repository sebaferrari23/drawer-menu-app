import React from 'react';
import {
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MainNavigation } from '../constants/navigation';
import { products } from '../constants/products';
import { MainStackInternalNavigationProp, Product } from '../types';
import { colors } from '../constants/theme';

export const ProductsScreen = () => {
  const navigation = useNavigation<MainStackInternalNavigationProp>();

  const goToProduct = (product: Product) => {
    navigation.navigate(MainNavigation.PRODUCT, { product });
  };

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => goToProduct(item)}>
        <Image source={{ uri: item.photo }} style={styles.itemPhoto} />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <FlatList
          style={styles.productsList}
          data={products}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={renderItem}
        />
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
    paddingHorizontal: 24,
  },
  separator: {
    height: 20,
  },
  productsList: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  itemPhoto: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
});
