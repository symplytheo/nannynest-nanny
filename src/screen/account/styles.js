import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: { padding: 16 },
  dp: { height: 56, width: 56, borderRadius: 16 },
  mb8: { marginBottom: 8 },
  mt8: { marginTop: 8 },
  bold: { fontWeight: Platform.OS === 'ios' ? '700' : '600' },
  tabActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderColor: Colors.grey + '33',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: { justifyContent: 'center', alignItems: 'center' },
  centered: { textAlign: 'center' },
  title: { fontWeight: '500', marginBottom: 4 },
  inputContainer: { marginVertical: 12 },
  picker: {
    inputIOS: {
      borderWidth: 1,
      borderColor: Colors.grey,
      borderRadius: 6,
      fontSize: 16,
      height: 56,
      paddingHorizontal: 12,
      backgroundColor: Colors.onPrimary,
    },
    inputAndroid: {
      borderWidth: 1,
      borderColor: Colors.grey,
      borderRadius: 6,
      fontSize: 16,
      height: 56,
      paddingHorizontal: 12,
      backgroundColor: Colors.onPrimary,
    },
  },
  f1: { flex: 1 },
  otp: {
    marginTop: 24,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  roundedTextInput: {
    borderRadius: 8,
    borderWidth: 2,
    height: 56,
  },
  socialBtn: { height: 56, marginVertical: 8 },
  profileOverview: { flexDirection: 'row', alignItems: 'center' },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 12,
  },
  chip: {
    borderRadius: 24,
    marginRight: 8,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  section: {
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingBottom: 24,
  },
  socials: {
    marginTop: 8,
    paddingVertical: 16,
  },
});

export default styles;
