import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const PaymentMethodScreen = ({ navigation }) => {
  const [method, setMethod] = useState('cash');
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Text variant="bodyLarge" style={[styles.bold, styles.mb8]}>
          Payment
        </Text>
        <View style={[styles.mb8, styles.mt8]}>
          <RadioButton.Group onValueChange={v => setMethod(v)} value={method}>
            <View style={[styles.status, styles.mb8]}>
              <View style={styles.status}>
                <MCIcon name="cash-multiple" color={Colors.primary} size={24} />
                <View style={{ marginLeft: 15 + 1 }}>
                  <Text variant="bodyMedium" style={{ fontWeight: 500 + '' }}>
                    Mary Jane Elizabeth
                  </Text>
                  <Text variant="bodyMedium" style={{ color: Colors.grey }}>
                    1234567890 First bank PLC
                  </Text>
                </View>
              </View>
              <RadioButton.Android value="cash" />
            </View>
          </RadioButton.Group>

          <View style={[styles.mt8, styles.status]}>
            <AppButton
              icon="plus"
              mode="text"
              textColor={Colors.primary}
              onPress={() => navigation.navigate('payment-add')}>
              Add new bank
            </AppButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;
