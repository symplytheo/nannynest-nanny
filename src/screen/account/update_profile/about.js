import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../../components/appbutton';
import { Colors } from '../../../styles/colors';

const ProfileAboutModal = ({ open, onClose }) => {
  const [about, setAbout] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={false}
      presentationStyle="fullScreen"
      visible={open}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPress={onClose}>
        <View
          style={styles.modalView}
          onStartShouldSetResponder={event => true}
          onTouchEnd={e => {
            e.stopPropagation();
          }}>
          <Appbar.Header>
            <TouchableOpacity activeOpacity={0.8} onPress={onClose}>
              <MCIcon name="arrow-left" size={24} color={Colors.black} />
            </TouchableOpacity>
            <Appbar.Content title="About" titleStyle={styles.title} />
          </Appbar.Header>

          <TextInput
            mode="outlined"
            value={about}
            multiline
            numberOfLines={4}
            style={styles.input}
            onChangeText={v => setAbout(v)}
          />

          <AppButton onPress={onClose}>Save</AppButton>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

ProfileAboutModal.defaultProps = {
  open: false,
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  modalView: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
    paddingBottom: 36,
    width: '100%',
  },
  title: {
    color: Colors.black,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16,
  },
  input: { height: 112, marginBottom: 16 },
});

export default ProfileAboutModal;
