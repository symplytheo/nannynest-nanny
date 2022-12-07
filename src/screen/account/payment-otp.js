import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import AppButton from '../../components/appbutton';
import OTPTextView from '../../components/otp_text_view';
import { Colors } from '../../styles/colors';
import styles from './styles';

const PaymentOtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  return (
    <SafeAreaView style={[styles.f1, { backgroundColor: Colors.background }]}>
      <View style={[styles.container, styles.mainContent]}>
        <Text variant="titleMedium" style={styles.bold}>
          Enter OTP
        </Text>
        <Text variant="labelSmall" style={{ color: Colors.grey }}>
          {"We've just sent +234 816 770 2086 an OTP"}
        </Text>
        <View style={styles.otp}>
          <OTPTextView
            defaultValue={otp}
            tintColor={Colors.primary}
            inputCount={4}
            textInputStyle={styles.roundedTextInput}
            selectionColor={Colors.secondary}
            handleTextChange={v => setOtp(v)}
          />
        </View>
        <AppButton onPress={() => navigation.navigate('payment')}>
          Next
        </AppButton>
      </View>
    </SafeAreaView>
  );
};

export default PaymentOtpScreen;
