import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
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
    backgroundColor: Colors.white,
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
  rate: {
    alignItems: 'flex-end',
    paddingHorizontal: 8,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  mb16: { marginBottom: 16 },
  map: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  acceptModal: {
    backgroundColor: Colors.white,
    padding: 24,
    margin: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontWeight: '600',
    color: Colors.green,
    margin: 16,
  },
  dateSummary: { marginLeft: 4, flex: 1 },
  mapBg: {
    position: 'relative',
    minHeight: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: Colors.background,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 24,
    borderRadius: 24,
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 4,
  },
  destination: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
});

export default styles;
