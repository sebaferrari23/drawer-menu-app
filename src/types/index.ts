import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigation } from '../constants/navigation';

export type Product = {
  id: string;
  title: string;
  photo: string;
};

interface ProductScreenProps {
  product: Product;
}

export type MainStackParamsList = {
  [MainNavigation.PRODUCTS]: undefined;
  [MainNavigation.PRODUCT]: ProductScreenProps;
};

type MainNavigationProp<Screen extends MainNavigation> = StackNavigationProp<
  MainStackParamsList,
  Screen
>;

export type MainStackInternalNavigationProp = MainNavigationProp<never>;
