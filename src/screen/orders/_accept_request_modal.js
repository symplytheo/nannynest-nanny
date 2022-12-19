import React from 'react';
import { FAB, Modal, Portal, Text } from 'react-native-paper';
import AppButton from '../../components/appbutton';
import { Colors } from '../../styles/colors';
import styles from './styles';

const AcceptRequestModal = ({ visible, onDismiss, navigation }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.acceptModal}>
        <FAB
          icon="map-marker"
          customSize={72}
          mode="flat"
          color={Colors.primary}
          style={[styles.sessionFab, styles.mb16]}
        />
        <Text
          variant="labelLarge"
          style={[
            { fontWeight: 600 + '', textAlign: 'center' + '' },
            styles.mb16,
          ]}>
          Accept order request
        </Text>
        <Text
          variant="bodyMedium"
          style={[styles.mb16, { textAlign: 'center' + '' }]}>
          By accepting the request, you accept the condition(s) stated by the
          client.
        </Text>

        <AppButton
          buttonColor={Colors.white}
          textColor={Colors.primary}
          style={{ width: 240 + 0 }}
          onPress={onDismiss}>
          Cancel
        </AppButton>
        <AppButton
          style={{ width: 240 + 0 }}
          onPress={() => {
            onDismiss();
            navigation.navigate('accept-order');
          }}>
          Accept
        </AppButton>
      </Modal>
    </Portal>
  );
};

export default AcceptRequestModal;
