import { Colors } from '@/constants/Colors';
import { StyleSheet, Platform } from 'react-native';

export const homeStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: Colors.light.icon,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    position: 'absolute', // Make the header sticky
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Ensure it stays on top of the scrollable content
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: Platform.OS === 'web' ? '100%' : '90%', // Ensure correct width on web
    alignSelf: 'center', // Centers header for all platforms
  },
  headerText: {
    color: Colors.light.background,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  itemContainer: {
    flexGrow: 1, // Ensures scroll content fills the space
    paddingTop: 90, // Leave space for the sticky header
    paddingBottom: 80, // Leave space for the sticky footer
  },
});