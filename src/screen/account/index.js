import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider, Switch, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import { Colors } from '../../styles/colors';
import styles from './styles';

const SCREENS = [
  { icon: 'cash-multiple', text: 'Payment', route: 'payment' },
  { icon: 'account', text: 'Profile', route: 'profile' },
  { icon: 'information', text: 'About', route: 'about' },
  { icon: 'help-circle', text: 'Help', route: 'help' },
];

const AccountScreen = ({ navigation }) => {
  const [available, setAvailable] = useState(false);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Image source={person} style={[styles.dp, styles.mb8]} />
          <Text variant="bodyLarge" style={styles.bold}>
            Mary Jane
          </Text>
          <Text
            variant="bodyMedium"
            style={[{ color: Colors.grey }, styles.mb8]}>
            +234 816 770 2086
          </Text>
          <View style={[styles.container, { flexDirection: 'row' + '' }]}>
            <View style={{ width: 50 + '%' }}>
              <Text variant="bodyMedium" style={styles.centered}>
                2,034
              </Text>
              <Text
                variant="bodyMedium"
                style={[styles.centered, { fontWeight: 500 + '' }]}>
                Orders
              </Text>
            </View>
            <View style={{ width: 50 + '%' }}>
              <Text variant="bodyMedium" style={styles.centered}>
                234
              </Text>
              <Text
                variant="bodyMedium"
                style={[styles.centered, { fontWeight: 500 + '' }]}>
                Ratings
              </Text>
            </View>
          </View>
        </View>

        <Divider style={{ backgroundColor: Colors.grey + '33' }} />

        <View style={[styles.status, styles.container, styles.mt8]}>
          <Text
            variant="bodyMedium"
            style={[styles.centered, { fontWeight: 500 + '' }]}>
            Status: {available ? 'Available' : 'Unavailable'}
          </Text>
          <Switch
            value={available}
            onValueChange={v => setAvailable(v)}
            style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }}
          />
        </View>

        <View style={{ marginVertical: 8 + 0 }}>
          {SCREENS.map(screen => (
            <TouchableOpacity
              key={screen.text}
              activeOpacity={0.7}
              style={styles.tabActionItem}
              onPress={() => navigation.navigate(screen.route)}>
              <MCIcon
                name={screen.icon}
                style={{ marginRight: 16 + 0 }}
                size={24}
                color={Colors.primary}
              />
              <Text variant="bodyMedium">{screen.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
