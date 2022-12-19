import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar, FAB } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
import NotificationScreen from '../screen/dashboard/notification';
import EarningsScreen from '../screen/dashboard/earnings';
import EarningDetails from '../screen/dashboard/earnings_details';
import OngoingSessionModalScreen from '../screen/dashboard/ongoing_session';
import ChatScreen from '../screen/chat';
import StartSessionScreen from '../screen/orders/start_session';
import CancellationScreen from '../screen/cancellation';
import CancellationOthersScreen from '../screen/cancellation/others';
import OrderHistoryScreen from '../screen/orders/history';
import NewOrderScreen from '../screen/orders/new_order';
import AcceptOrderScreen from '../screen/orders/accept_order';
import OnMyWayScreen from '../screen/orders/onmyway';
import { useNavigation } from '@react-navigation/native';
import OrderArrivedScreen from '../screen/orders/order_arrived';
import ProfileOverviewScreen from '../screen/account/profile';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={AppSplashScreen} />
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="dashboard" component={TabNavigation} />
        <Stack.Screen
          name="ongoing"
          options={{ presentation: 'transparentModal' }}
          component={OngoingSessionModalScreen}
        />
        <Stack.Screen name="start-session" component={StartSessionScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          header: props => (
            <Appbar.Header style={styles.header}>
              {props.back ? (
                <FAB
                  customSize={48}
                  mode="flat"
                  icon="arrow-left"
                  style={styles.fab}
                  onPress={props.navigation.goBack}
                />
              ) : null}
              <Appbar.Content
                title={props.options.title}
                titleStyle={styles.title}
              />
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

        <Stack.Screen name="cancel" component={CancellationScreen} />
        <Stack.Screen
          name="cancel-others"
          component={CancellationOthersScreen}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerTitle: '',
          headerTitleStyle: { fontFamily: 'Montserrat', fontWeight: '600' },
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
              <MCIcon name="arrow-left" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
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
        <Stack.Screen
          name="notification"
          component={NotificationScreen}
          options={{ headerTitle: 'Notification' }}
        />
        <Stack.Screen
          name="earnings"
          component={EarningsScreen}
          options={{ headerTitle: 'Your earnings' }}
        />
        <Stack.Screen name="earning-details" component={EarningDetails} />
        <Stack.Screen
          name="history"
          component={OrderHistoryScreen}
          options={{ headerTitle: 'History' }}
        />
        <Stack.Screen
          name="new-order"
          component={NewOrderScreen}
          options={{ headerTitle: 'New Order' }}
        />
        <Stack.Screen name="accept-order" component={AcceptOrderScreen} />
        <Stack.Screen name="order-arrived" component={OrderArrivedScreen} />
        <Stack.Screen
          name="chat"
          component={ChatScreen}
          options={{
            headerTitle: 'Chat',
            headerLeft: () => (
              <TouchableOpacity activeOpacity={0.7}>
                <MCIcon name="close" color={Colors.black} size={24} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.7}>
                <MCIcon name="phone" color={Colors.black} size={24} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="onmyway"
          component={OnMyWayScreen}
          options={{
            headerTitle: "You're heading to:",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 14,
              fontFamily: 'Montserrat',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileOverviewScreen}
          options={{ headerTitle: 'Profile' }}
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
