import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.background },
  container: { padding: 16 },
  chatInputBg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: Colors.white,
  },
  chatInput: { minHeight: 56 },
  text: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 4,
    borderRadius: 16,
  },
  sender: {
    backgroundColor: Colors.secondary,
    color: Colors.onSecondary,
  },
  receiver: {
    backgroundColor: Colors.primaryContainer,
    color: Colors.onPrimaryContainer,
  },
  chatDate: { color: Colors.grey, textAlign: 'center' },
  chatAvatar: { marginRight: 4, marginTop: 6 },
  chatRow: { flexDirection: 'row', justifyContent: 'flex-end' },
});

export default styles;
