import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Avatar, Divider, FAB, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import styles from './styles';
import { Colors } from '../../styles/colors';

const DashboardScreen = ({ navigation, route }) => {
  const [isOngoing, setIsOngoing] = useState(false);

  useEffect(() => {
    if (route.params?.ongoing) {
      setIsOngoing(route.params?.ongoing);
    }
  }, [route.params?.ongoing]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.infoItem, { paddingVertical: 1 + 3 }]}>
          <Avatar.Image size={40} source={person} style={styles.shadow} />
          <Text variant="bodyLarge" style={[styles.bold, styles.ml16]}>
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
          {isOngoing ? (
            <TouchableOpacity
              style={[
                styles.sessionCard,
                { backgroundColor: Colors.primaryContainer },
              ]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ongoing')}>
              <Avatar.Image size={40} source={person} style={styles.shadow} />
              <View style={[styles.ml16, { flex: 1 + 0 }]}>
                <Text
                  variant="bodyMedium"
                  style={[styles.medium, { marginBottom: 4 + 0 }]}>
                  Ongoing session
                </Text>
                <Text variant="bodySmall" style={{ color: Colors.primary }}>
                  Time left{' '}
                  <Text variant="bodySmall" style={{ color: Colors.black }}>
                    03:04:09
                  </Text>
                </Text>
              </View>
              <MCIcon name="chevron-right" color={Colors.black} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.sessionCard} activeOpacity={0.8}>
              <MCIcon name="book-cancel" size={28} color={Colors.white} />
              <Text
                variant="bodyMedium"
                style={[{ color: Colors.white }, styles.ml16]}>
                You have no ongoing session
              </Text>
            </TouchableOpacity>
          )}
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
