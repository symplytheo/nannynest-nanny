import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { getToday } from 'react-native-modern-datepicker';
import { Avatar, Text, TextInput } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import AppButton from '../../components/appbutton';
import styles from './styles';
import DatePickerModal from '../../components/datepicker_modal';
import RNPickerSelect from '../../components/RNPickerSelect';
import { COUNTRIES, PRONOUNS } from '../../assets/js/data';

const RNFS = require('react-native-fs');

const UpdateProfileScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    avatar: '',
    fullname: '',
    email: '',
  });
  const [date, setDate] = useState(getToday());
  const [dateModal, setDateModal] = useState(false);

  const handleImageUpload = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        type: DocumentPicker.types.images,
        copyTo: 'documentDirectory',
      });
      const filePath = decodeURI(file.fileCopyUri);
      const b64 = await RNFS.readFile(filePath, 'base64');
      const image_b64 = `data:${file.type};base64,${b64}`;
      setForm({ ...form, avatar: image_b64 });
      //
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancel');
      } else {
        console.log(err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.mb8}>
          <View style={styles.inputContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleImageUpload}>
              {form.avatar ? (
                <Avatar.Image source={{ uri: form.avatar }} style={styles.avatar} size={80} />
              ) : (
                <Avatar.Icon icon="account" style={styles.avatar} size={80} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text variant="bodyLarge" style={[styles.title, { marginBottom: 4 + 0 }]}>
              Full name
            </Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your fullname"
              style={{ height: styles.input.height }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text variant="bodyLarge" style={[styles.title, { marginBottom: 4 + 0 }]}>
              Email address
            </Text>
            <TextInput
              mode="outlined"
              placeholder="Valid email"
              style={{ height: styles.input.height }}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text variant="bodyLarge" style={[styles.title, { marginBottom: 4 + 0 }]}>
              How old are you?
            </Text>
            <TouchableOpacity activeOpacity={0.75} onPress={() => setDateModal(true)}>
              <View pointerEvents="none">
                <TextInput
                  mode="outlined"
                  placeholder="YYYY/MM/DD"
                  style={{ height: styles.input.height }}
                  left={<TextInput.Icon icon="calendar-blank" />}
                  editable={false}
                  value={date}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text variant="bodyLarge" style={[styles.title, { marginBottom: 4 + 0 }]}>
              Country
            </Text>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              onValueChange={val => console.log(val)}
              items={COUNTRIES}
              placeholder={{ label: 'Select country', value: null }}
              style={styles.picker}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text variant="bodyLarge" style={[styles.title, { marginBottom: 4 + 0 }]}>
              Languages
            </Text>
            <TextInput
              mode="outlined"
              placeholder="e.g. English, French"
              style={{ height: styles.input.height }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text variant="bodyLarge" style={[styles.title, { marginBottom: 4 + 0 }]}>
              Preferred Pronouns
            </Text>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              onValueChange={val => console.log(val)}
              items={PRONOUNS}
              placeholder={{ label: 'Select Pronouns', value: null }}
              style={styles.picker}
            />
          </View>
        </View>
        <AppButton onPress={navigation.goBack}>Update info</AppButton>
      </ScrollView>
      {/*  */}
      <DatePickerModal
        title="Date of Birth"
        open={dateModal}
        current={date}
        selected={date}
        onSelectedChange={v => setDate(v)}
        onClose={() => setDateModal(false)}
      />
    </SafeAreaView>
  );
};

export default UpdateProfileScreen;
