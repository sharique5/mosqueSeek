import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const mosqueListStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5,
    width: "25%",
  },
  number: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 16,
    color: Colors.light.text
  },
  text: {
    fontSize: 16,
    color: Colors.light.icon
  },
});