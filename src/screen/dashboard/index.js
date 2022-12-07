import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text variant="titleLarge">Dashboard</Text>
    </SafeAreaView>
  );
};

export default DashboardScreen;
