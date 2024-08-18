import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const mosqueCardStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 320,
    height: 240,
    borderWidth: 2,
    borderRadius: 10,
    margin: 8,
    borderColor: Colors.light.icon,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    color: Colors.light.text,
  },
  distance: {
    fontSize: 12,
    color: Colors.light.tabIconDefault,
  },
  nameContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
    width: "80%",
  },
  navigate: {
    width: "20%",
    height: "100%",
  },
  details: {
    flexDirection: "row",
    height: "40%",
    width: "100%",
  }
});