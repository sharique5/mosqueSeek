import { StyleSheet } from 'react-native';

export const mosqueCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 320,
    height: 75,
    borderWidth: 2,
    borderRadius: 10,
    margin: 2,
  },
  image: {
    width: "20%",
    height: "100%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
  },
  distance: {
    fontSize: 12,
  },
  details: {
    width: "60%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
  },
  navigate: {
    width: "20%",
    height: "100%",
  }
});