import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Checkbox, Divider, Text } from 'react-native-paper';
import AppButton from '../../../components/appbutton';
import { Colors } from '../../../styles/colors';

const ProfileCategoriesModal = ({ open, onClose }) => {
  const [categories, setCategories] = useState([
    'Toddler',
    'Infants',
    'Elderly',
    'Disabled',
  ]);

  const handleAddItem = item => {
    if (categories.includes(item)) {
      setCategories(prev => prev.filter(el => el !== item));
    } else {
      setCategories(prev => [...prev, item]);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalContainer}
        onPress={onClose}>
        <View
          style={styles.modalView}
          onStartShouldSetResponder={event => true}
          onTouchEnd={e => {
            e.stopPropagation();
          }}>
          <Text variant="bodyLarge" style={styles.title}>
            Categories
          </Text>
          <Divider style={{ backgroundColor: Colors.grey }} />
          <View style={styles.itemContainer}>
            {['Toddler', 'Infants', 'Elderly', 'Disabled'].map(item => (
              <Checkbox.Item
                mode="android"
                status={categories.includes(item) ? 'checked' : 'unchecked'}
                position="leading"
                label={item}
                color={Colors.secondary}
                labelStyle={styles.labelStyle}
                onPress={() => handleAddItem(item)}
              />
            ))}
          </View>
          <AppButton onPress={onClose}>Save</AppButton>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

ProfileCategoriesModal.defaultProps = {
  open: false,
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#0005',
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 16,
    paddingBottom: 36,
    width: '100%',
  },
  title: {
    color: Colors.black,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: { marginVertical: 16 },
  labelStyle: { textAlign: 'left', marginLeft: 16 },
});

export default ProfileCategoriesModal;
