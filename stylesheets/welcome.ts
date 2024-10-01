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
  },
  footer: {
    position: "absolute",
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5,
    color: Colors.light.icon,
  },
  footerImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});