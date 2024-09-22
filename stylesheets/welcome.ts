import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const welcomeStyles = StyleSheet.create({
  homeIcons: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    textDecorationLine: "none",
    color: Colors.light.icon,
  }
});