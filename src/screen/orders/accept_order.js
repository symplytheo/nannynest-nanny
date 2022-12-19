import React, { useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';
import mapImage from '../../assets/img/map.png';

const SUMMARY = [
  { label: 'Discount', value: '5%' },
  { label: 'Subtotal', value: '$2300.00' },
  { label: 'Transportation coverage', value: '$230.00' },
  { label: 'Total', value: '$2750.00' },
];

const AcceptOrderScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('chat')}>
          <MCIcon name="message-text" size={24} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: Colors.white }]}>
      <Text style={[styles.topText, styles.mb16]} variant="labelLarge">
        You have accepted this request
      </Text>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        {[1, 2].map(x => (
          <View key={x} style={[styles.row, styles.rate]}>
            <Text variant="bodyMedium">2x Infants</Text>
            <Text variant="bodyMedium" style={styles.medium}>
              $200
            </Text>
          </View>
        ))}

        <Divider
          style={{ backgroundColor: Colors.grey + '77', marginTop: 15 + 1 }}
        />

        <TouchableOpacity style={{ padding: 8 + 0 }} activeOpacity={0.7}>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            I need you to be here as soon as possible please
          </Text>
        </TouchableOpacity>

        <Divider
          style={[{ backgroundColor: Colors.grey + '77' }, styles.mb16]}
        />

        <View style={[{ flexDirection: 'row' + '' }, styles.mb16, styles.mt16]}>
          <MCIcon size={20} color={Colors.primary} name="clock-outline" />
          <View style={styles.dateSummary}>
            {[1, 2].map(x => (
              <View key={x} style={[styles.row, styles.rate]}>
                <Text variant="bodyMedium">Thursday, Sept. 2022</Text>
                <Text variant="bodyMedium" style={styles.medium}>
                  6:00PM
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Divider style={styles.mb16} />

        <TouchableOpacity style={[styles.mb16]} activeOpacity={0.7}>
          <View style={[styles.row, styles.mb16]}>
            <MCIcon name="map-marker" size={20} color={Colors.primary} />
            <Text variant="bodyMedium">
              5a, Ajayi Oni Street, Lagos, Nigeria
            </Text>
            <MCIcon name="chevron-right" size={20} color={Colors.grey} />
          </View>
          <Image source={mapImage} style={styles.map} />
        </TouchableOpacity>

        <View style={styles.mb16}>
          <Text variant="bodyMedium" style={[styles.medium, styles.mb16]}>
            Summary
          </Text>
          {SUMMARY.map((el, v) => (
            <View
              key={el.label}
              style={[styles.row, styles.rate, { paddingHorizontal: 0 + 0 }]}>
              <Text
                variant={v === 3 ? 'bodyMedium' : 'bodySmall'}
                style={[
                  { color: v === 3 ? Colors.black : Colors.grey },
                  v === 3 && styles.medium,
                ]}>
                {el.label}
              </Text>
              <Text variant="bodyMedium" style={styles.medium}>
                {el.value}
              </Text>
            </View>
          ))}
        </View>

        <Divider style={styles.mb16} />

        <View style={styles.mb16}>
          <Text variant="bodyMedium" style={[styles.medium, styles.mb16]}>
            Payment Method
          </Text>
          <View style={[styles.row, styles.mb16]}>
            <MCIcon name="credit-card-chip" size={20} color={Colors.primary} />
            <Text
              variant="bodyMedium"
              style={{ color: Colors.grey, marginLeft: 8 + 0 }}>
              Debit Card
            </Text>
          </View>
          <Text
            variant="bodySmall"
            style={[{ color: Colors.grey }, styles.mb16]}>
            You'll be paid after have you have marked session to be completed.
            Service provider fee may apply.
          </Text>
        </View>
      </ScrollView>

      <AppButton
        style={[styles.mb16, { margin: 15 + 1 }]}
        onPress={() => navigation.navigate('onmyway')}>
        On my way
      </AppButton>
    </SafeAreaView>
  );
};

export default AcceptOrderScreen;
