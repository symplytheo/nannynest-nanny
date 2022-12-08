import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Avatar, Divider, FAB, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import styles from './styles';
import { Colors } from '../../styles/colors';

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.infoItem, { paddingVertical: 1 + 3 }]}>
          <Avatar.Image
            size={40}
            source={person}
            style={[styles.shadow, { marginRight: 15 + 1 }]}
          />
          <Text variant="bodyLarge" style={{ fontWeight: 600 + '' }}>
            Hi Mary
          </Text>
          <TouchableOpacity
            activeOpacity={0.75}
            style={{ marginLeft: 'auto' + '' }}
            onPress={() => navigation.navigate('notification')}>
            <MCIcon name="bell-ring" size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>

        <View style={[styles.card, styles.shadow]}>
          <Text
            variant="bodyMedium"
            style={{ color: Colors.white, marginBottom: 2 + 2 }}>
            Balance
          </Text>
          <Text
            variant="titleLarge"
            style={[{ color: Colors.white }, styles.bold]}>
            ₦ 58,564.45
          </Text>
          <TouchableOpacity
            style={styles.earningBtn}
            activeOpacity={0.75}
            onPress={() => navigation.navigate('earnings')}>
            <Text variant="bodySmall" style={{ color: Colors.white }}>
              Your earnings
            </Text>
            <MCIcon name="chevron-right" size={16} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <Divider
          style={{ backgroundColor: Colors.grey + '66', marginBottom: 23 + 1 }}
        />

        <View>
          <Text variant="bodyLarge" style={{ marginBottom: 15 + 1 }}>
            Ongoing session
          </Text>
          <TouchableOpacity style={styles.sessionCard} activeOpacity={0.8}>
            <MCIcon name="book-cancel" size={28} color={Colors.white} />
            <Text
              variant="bodyMedium"
              style={{ marginLeft: 15 + 1, color: Colors.white }}>
              You have no ongoing session
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 24 + 0 }}>
          <Text variant="bodyLarge" style={{ marginBottom: 7 + 1 }}>
            Orders
          </Text>
          <View style={styles.orderSession}>
            <TouchableOpacity style={styles.orderCard} activeOpacity={0.7}>
              <FAB
                icon="newspaper"
                mode="flat"
                customSize={64}
                color={Colors.primary}
                style={{ borderRadius: 64 + 0 }}
              />
              <View style={styles.orderCardText}>
                <Text variant="bodySmall">New</Text>
                <View style={styles.orderCardBadge}>
                  <Text style={{ color: Colors.white }}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.orderCard} activeOpacity={0.7}>
              <FAB
                icon="lock-clock"
                mode="flat"
                customSize={64}
                color={Colors.primary}
                style={{ borderRadius: 64 + 0 }}
              />
              <View style={styles.orderCardText}>
                <Text variant="bodySmall">Upcoming</Text>
                <View style={styles.orderCardBadge}>
                  <Text style={{ color: Colors.white }}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
