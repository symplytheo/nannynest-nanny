import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

const OrdersScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text variant="titleLarge">Orders</Text>
    </SafeAreaView>
  );
};

export default OrdersScreen;
