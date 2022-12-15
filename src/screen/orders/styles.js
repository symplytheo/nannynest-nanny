import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: { padding: 16 },
  px16: { paddingHorizontal: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  tabBar: {
    backgroundColor: Colors.background,
  },
  badge: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: Colors.primary,
    borderRadius: 9999,
    marginLeft: 4,
  },
  row: { flexDirection: 'row' },
  medium: { fontWeight: '500' },
  orderCard: {
    backgroundColor: Colors.primaryContainer,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  orderCardImage: { height: 56, width: 56, borderRadius: 16, marginRight: 8 },
  sessionWrapper: { backgroundColor: Colors.primary, flex: 1 },
  sessionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sessionFab: { borderRadius: 72, marginBottom: 8 },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: Colors.grey + '33',
  },
});

export default styles;
