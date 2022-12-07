import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar, FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import OnboardingScreen from '../screen/onboarding';
import AppSplashScreen from '../screen/splash';
import AuthPhoneNumberScreen from '../screen/auth/phone_number';
import AuthOtpScreen from '../screen/auth/otp';
import AuthSocialAccount from '../screen/auth/social_account';
import AuthProfileScreen from '../screen/auth/profile';
import AuthKycScreen from '../screen/auth/kyc';
import TabNavigation from './tab';
import AboutScreen from '../screen/account/about';
import PaymentMethodScreen from '../screen/account/payment';
import PaymentAddBankScreen from '../screen/account/payment_add';
import PaymentOtpScreen from '../screen/account/payment-otp';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={AppSplashScreen} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="dashboard" component={TabNavigation} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          header: ({ navigation, back, options }) => (
            <Appbar.Header style={styles.header}>
              {back ? (
                <FAB
                  customSize={48}
                  mode="flat"
                  icon="arrow-left"
                  style={styles.fab}
                  onPress={navigation.goBack}
                />
              ) : null}
              <Appbar.Content title={options.title} titleStyle={styles.title} />
            </Appbar.Header>
          ),
          headerTitle: null,
        }}>
        <Stack.Screen name="auth-phone" component={AuthPhoneNumberScreen} />
        <Stack.Screen name="auth-otp" component={AuthOtpScreen} />
        <Stack.Screen name="auth-profile" component={AuthProfileScreen} />
        <Stack.Screen name="auth-kyc" component={AuthKycScreen} />
        <Stack.Screen name="auth-social" component={AuthSocialAccount} />

        <Stack.Screen name="payment-otp" component={PaymentOtpScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerTitle: '',
          headerTitleStyle: { fontFamily: 'Montserrat', fontWeight: '600' },
        }}>
        <Stack.Screen
          name="about"
          component={AboutScreen}
          options={{ headerTitle: 'About' }}
        />
        <Stack.Screen name="payment" component={PaymentMethodScreen} />
        <Stack.Screen
          name="payment-add"
          component={PaymentAddBankScreen}
          options={{ headerTitle: 'Add new bank' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: { backgroundColor: Colors.background },
  fab: { borderRadius: 8, marginLeft: 10 },
  title: { fontSize: 18, fontWeight: '600' },
});

export default StackNavigation;
