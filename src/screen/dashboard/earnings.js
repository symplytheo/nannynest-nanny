import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';

const EarningsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {[...Array(8)].map((_, x) => (
          <TouchableOpacity
            key={x}
            activeOpacity={0.7}
            style={[styles.earningItem, x > 6 && { borderBottomWidth: 0 + 0 }]}
            onPress={() => navigation.navigate('earning-details')}>
            <View>
              <Text
                variant="bodyLarge"
                style={{ color: Colors.green, fontWeight: 600 + '' }}>
                +2,000.00
              </Text>
              <Text
                variant="bodySmall"
                style={{ color: Colors.grey, marginTop: 4 + 0 }}>
                04 Oct, 2022 10:13AM Completed
              </Text>
            </View>
            <MCIcon name="chevron-right" size={24} color={Colors.black} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EarningsScreen;
