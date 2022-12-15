import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles/colors';
import styles from './styles';
import AppButton from '../../components/appbutton';

const StartSessionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.sessionWrapper}>
      <View style={[styles.sessionContainer, styles.container]}>
        <TouchableOpacity activeOpacity={0.75} onPress={navigation.goBack}>
          <MCIcon name="close" color={Colors.white} size={24} />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' + '' }}>
          <View style={[styles.row]}>
            <FAB
              customSize={72}
              style={styles.sessionFab}
              mode="flat"
              icon="marker-check"
              color={Colors.primary}
            />
          </View>
          <Text
            variant="labelLarge"
            style={{ fontWeight: 600 + '', color: Colors.white }}>
            Your session has started
          </Text>
        </View>

        <AppButton
          buttonColor={Colors.white}
          textColor={Colors.primary}
          onPress={() =>
            navigation.navigate('dashboard', {
              screen: 'home',
              params: { ongoing: true },
            })
          }>
          Go to Dashboard
        </AppButton>
      </View>
    </SafeAreaView>
  );
};

export default StartSessionScreen;
