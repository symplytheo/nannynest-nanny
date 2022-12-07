import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import AppButton from '../../components/appbutton';
import RNPickerSelect from '../../components/RNPickerSelect';
import styles from './styles';

const BANKS = [
  { label: 'First Bank PLC', value: 'FirstBank' },
  { label: 'Wema Bank', value: 'Wema' },
  { label: 'United Bank for Africa', value: 'UBA' },
  { label: 'Guaranty Trust Bank', value: 'GTBank' },
];

const PaymentAddBankScreen = () => {
  const [bank, setBank] = useState();
  const [acctNum, setAcctNum] = useState();
  const [acctName] = useState('Mary Jane Elizabeth');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.container, styles.f1]}>
        <View style={[styles.mb8, styles.f1]}>
          <View style={styles.inputContainer}>
            <Text variant="bodyMedium" style={styles.title}>
              Bank name
            </Text>
            <RNPickerSelect
              value={bank}
              useNativeAndroidPickerStyle={false}
              onValueChange={setBank}
              items={BANKS}
              placeholder={{ label: 'Select a bank', value: null }}
              style={styles.picker}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text variant="bodyMedium" style={styles.title}>
              Account number
            </Text>
            <TextInput
              value={acctNum}
              mode="outlined"
              style={{ height: styles.dp.height }}
              onChangeText={setAcctNum}
            />
          </View>

          {acctNum && (
            <View style={styles.inputContainer}>
              <Text variant="bodyMedium" style={styles.title}>
                Account name
              </Text>
              <TextInput
                mode="outlined"
                value={acctName}
                editable={false}
                style={{ height: styles.dp.height }}
              />
            </View>
          )}
        </View>
        <AppButton>Save card</AppButton>
      </View>
    </SafeAreaView>
  );
};

export default PaymentAddBankScreen;
