import { Colors } from '@/constants/Colors';
import { StyleSheet, Platform } from 'react-native';

export const homeStyles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: Colors.light.icon,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
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
    height: "88%",
    width: "100%",
    maxWidth: "100%",
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});