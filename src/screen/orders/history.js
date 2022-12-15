import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import { Colors } from '../../styles/colors';
import styles from './styles';

const OrderHistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {[...Array(8)].map((_, x) => (
          <TouchableOpacity
            key={x}
            activeOpacity={0.7}
            style={[styles.historyItem, x > 6 && { borderBottomWidth: 0 + 0 }]}
            onPress={() => navigation.navigate('earning-details')}>
            <Image source={person} style={styles.orderCardImage} />
            <View style={{ flex: 1 + 0 }}>
              <Text
                variant="bodyMedium"
                style={{ color: Colors.black, fontWeight: 500 + '' }}>
                Matthew,
              </Text>
              <Text
                variant="bodySmall"
                style={{ color: Colors.grey, marginTop: 4 + 0 }}>
                04 Oct, 2022 10:13AM
              </Text>
              <Text
                variant="bodySmall"
                style={{ color: Colors.grey, marginTop: 4 + 0 }}>
                NGN5,000.00
              </Text>
            </View>
            <MCIcon name="chevron-right" size={24} color={Colors.black} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;
