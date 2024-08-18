import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  header: {
    backgroundColor: Colors.light.icon,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  }
});