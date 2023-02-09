import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { getToday } from 'react-native-modern-datepicker';
import { Checkbox, Text, TextInput } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/appbutton';
import styles from './styles';
import { Colors } from '../../styles/colors';
import RNPickerSelect from '../../components/RNPickerSelect';
import { COUNTRIES, PRONOUNS } from '../../assets/js/data';

const AuthKycScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    avatar: '',
    fullname: '',
    email: '',
    dob: getToday(),
    terms: true,
  });

  const handleFileUpload = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
        copyTo: 'documentDirectory',
      });
      setForm({ ...form, file });
      //
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancel');
      } else {
        console.log(err);
      }
    }
  };

  const handleNext = () => {
    navigation.navigate('auth-social');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainContent} showsVerticalScrollIndicator={false}>
        <Text variant="titleMedium" style={styles.title}>
          Update your KYC
        </Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text variant="bodyLarge" style={[styles.title, { marginBottom: 4 + 0 }]}>
              Upload a valid ID
            </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.file} onPress={handleFileUpload}>
              {!form.file ? (
                <View style={styles.rowBtwn}>
                  <Text
                    variant="bodyMedium"
                    style={{
                      color: Colors.primary,
                      fontWeight: 500 + '',
                    }}>
                    Upload a file
                  </Text>
                  <MCIcon
                    name="upload"
                    color={Colors.primary}
                    size={24}
                    style={{ marginLeft: 8 + 0 }}
                  />
                </View>
              ) : (
                <View style={styles.rowBtwn}>
                  <Text
                    variant="bodyMedium"
                    style={{
                      color: Colors.primary,
                      fontWeight: 500 + '',
                    }}>
                    {form.file.name}
                  </Text>
                </View>
              )}
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
          <View style={styles.terms}>
            <Checkbox.Android
              status={form.terms ? 'checked' : 'unchecked'}
              onPress={() => {
                setForm(prev => ({ ...prev, terms: !prev.terms }));
              }}
            />
            <Text variant="bodyMedium">I agree to the Terms of Services and Privacy policy.</Text>
          </View>
        </View>
        <AppButton onPress={handleNext}>Continue</AppButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthKycScreen;
