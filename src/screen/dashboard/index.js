import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import AppButton from '../../components/appbutton';
import styles from './styles';

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text variant="titleLarge">Dashboard</Text>
      <AppButton onPress={() => navigation.navigate('notification')}>
        Notification
      </AppButton>
    </SafeAreaView>
  );
};

export default DashboardScreen;
