import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: { padding: 16 },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: Colors.grey + '33',
  },
  shadow: {
    elevation: 6,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#29101E',
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  bold: {
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
  },
  card: {
    backgroundColor: Colors.primary,
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: 32,
  },
  earningBtn: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.white + '44',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  sessionCard: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderCard: {
    borderRadius: 16,
    height: 164,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondaryContainer,
  },
  orderCardText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  orderCardBadge: {
    marginLeft: 8,
    backgroundColor: Colors.primary,
    padding: 4,
    borderRadius: 28,
  },
  orderSession: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
