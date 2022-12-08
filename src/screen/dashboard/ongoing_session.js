import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import person from '../../assets/img/person.png';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const OngoingSessionModalScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={navigation.goBack}
      style={styles.transContainer}>
      <View
        style={[styles.halfScreen, { paddingBottom: insets.bottom }]}
        onStartShouldSetResponder={event => true}
        onTouchEnd={e => {
          e.stopPropagation();
        }}>
        <Text
          variant="bodyLarge"
          style={[styles.bold, styles.mb8, styles.ongoingTitle]}>
          Ongoing Session
        </Text>

        <Divider style={{ backgroundColor: Colors.grey + '55' }} />

        <View style={styles.earningItem}>
          <Text
            variant="bodyMedium"
            style={[styles.medium, { color: Colors.grey }]}>
            Time left:
          </Text>
          <Text variant="headlineMedium" style={styles.medium}>
            02:30:34
          </Text>
        </View>

        <View
          style={[styles.rowCentered, styles.section, styles.mb8, styles.mt8]}>
          <Image source={person} style={styles.image} />
          <View style={styles.ml16}>
            <Text variant="bodyLarge" style={styles.medium}>
              Matthew Ola
            </Text>
            <Text variant="bodyMedium">
              <MCIcon name="account" color={Colors.primary} size={20} /> View
              profile
            </Text>
          </View>
        </View>

        <AppButton
          icon={({ size, color }) => (
            <MCIcon name="message-text" color={color} size={20} />
          )}>
          Chat
        </AppButton>
      </View>
    </TouchableOpacity>
  );
};

export default OngoingSessionModalScreen;
