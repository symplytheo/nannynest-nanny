import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';

const SUMMARY = [
  { label: 'Discount', value: '-5%' },
  { label: 'Subtotal', value: '$2300.00' },
  { label: 'Transportation coverage', value: '$230.00' },
  { label: 'Total', value: '$2750.00' },
];

const EarningDetails = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="bodyMedium" style={[{ color: Colors.grey }, styles.mb8]}>
          04 Oct, 2022 10:13AM - 03:45PM {'  '}
          <Text variant="bodyMedium" style={{ color: Colors.green }}>
            Completed
          </Text>
        </Text>

        <View style={[styles.rowCentered, styles.mt8, styles.mb8]}>
          <MCIcon name="cash-multiple" size={20} color={Colors.primary} />
          <Text
            variant="bodyMedium"
            style={[{ color: Colors.primary }, styles.ml16]}>
            You recieved $300 from Matthew Ola
          </Text>
        </View>

        <View style={[styles.rowCentered, styles.section, styles.mb8]}>
          <MCIcon name="map-marker" color={Colors.primary} size={24} />
          <Text variant="bodyMedium" style={styles.ml16}>
            5a, Ajayi Oni Street, Lagos, Nigeria
          </Text>
        </View>

        <Divider style={{ backgroundColor: Colors.grey + '55' }} />

        <View style={styles.section}>
          <Text variant="bodyLarge" style={[styles.medium, styles.mb8]}>
            Review
          </Text>
          <View style={styles.rowCentered}>
            <StarRating
              rating={4.8}
              starSize={18}
              color={Colors.yellow}
              starStyle={{ marginHorizontal: 0 + 0 }}
              style={styles.rating}
              onChange={() => {}}
            />
            <Text
              variant="bodySmall"
              style={[{ color: Colors.grey }, styles.medium]}>
              4.8
            </Text>
          </View>
        </View>

        <Divider style={{ backgroundColor: Colors.grey + '55' }} />

        <View style={styles.section}>
          <Text variant="bodyLarge" style={[styles.medium, styles.mb8]}>
            Summary
          </Text>
          {SUMMARY.map((el, v) => (
            <View
              key={el.label}
              style={[
                styles.rowCentered,
                styles.mb8,
                { justifyContent: 'space-between' + '' },
              ]}>
              <Text
                variant="bodyMedium"
                style={[
                  { color: v === 3 ? Colors.black : Colors.grey },
                  v === 3 && styles.medium,
                ]}>
                {el.label}
              </Text>
              <Text variant="bodyMedium" style={v === 3 && styles.medium}>
                {el.value}
              </Text>
            </View>
          ))}
        </View>

        <Divider style={{ backgroundColor: Colors.grey }} />

        <View style={styles.section}>
          <Text variant="bodyLarge" style={[styles.medium, styles.mb8]}>
            Order Id
          </Text>
          <Text variant="bodyMedium" style={{ color: Colors.grey }}>
            We3525hy
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EarningDetails;
