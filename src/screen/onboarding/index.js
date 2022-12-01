import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Colors } from '../../styles/colors';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text variant="titleMedium">Onboarding</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
