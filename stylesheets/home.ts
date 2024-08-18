import { Colors } from '@/constants/Colors';
import { StyleSheet, Platform } from 'react-native';

export const homeStyles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: Colors.light.icon,
    alignItems: 'center',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: Platform.OS === 'web' ? '100%' : '90%', // Ensure correct width on web
    alignSelf: 'center', // Centers header for all platforms
  },
  headerText: {
    color: Colors.light.background,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});