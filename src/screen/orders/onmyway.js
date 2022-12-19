import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import map from '../../assets/img/map.png';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const OnMyWayScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [show, setShow] = useState();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={map} style={styles.mapBg}>
        <View style={styles.destination}>
          <Text
            variant="bodyMedium"
            style={[styles.medium, { textAlign: 'center' + '' }]}>
            <MCIcon name="map-marker" color={Colors.primary} size={16} /> 5a,
            Ajayi Oni Street, Lagos, Nigeria
          </Text>
        </View>
        <View style={[styles.bottomSheet, { paddingBottom: insets.bottom }]}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShow(!show)}
            style={[styles.mb16, styles.arrow]}>
            <MCIcon name={show ? 'chevron-down' : 'chevron-up'} size={24} />
          </TouchableOpacity>

          <View style={[styles.row, styles.rate]}>
            <View>
              <Text variant="bodyMedium" style={{ color: Colors.grey }}>
                Estimated arrival time
              </Text>
              <Text variant="headlineMedium" style={{ fontWeight: 600 + '' }}>
                13 <Text variant="bodyMedium">mins</Text>
              </Text>
            </View>
            <AppButton
              icon={({ color }) => (
                <MCIcon name="message-text" size={24} color={color} />
              )}
              mode="text"
              style={{ width: 120 + 0 }}
              onPress={() => navigation.navigate('chat')}>
              Chat
            </AppButton>
          </View>

          {show && (
            <View>
              <Divider bold style={styles.mb16} />
              <TouchableOpacity activeOpacity={0.7}>
                <View style={[styles.row, styles.mb16]}>
                  <MCIcon name="map-marker" size={24} color={Colors.primary} />
                  <Text variant="bodyMedium">
                    5a, Ajayi Oni Street, Lagos, Nigeria
                  </Text>
                </View>
              </TouchableOpacity>

              <Divider bold style={styles.mb16} />

              <View>
                <AppButton
                  style={{ marginBottom: 8 + 0 }}
                  onPress={() =>
                    navigation.navigate('accept-order', { type: 'arrived' })
                  }>
                  I have arrived
                </AppButton>
                <AppButton
                  buttonColor={Colors.primaryContainer}
                  textColor={Colors.primary}
                  onPress={() => navigation.navigate('cancel')}>
                  Cancel
                </AppButton>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnMyWayScreen;
