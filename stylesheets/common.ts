import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: Colors.light.background,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer2: {
    position: "relative",
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
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
  }
});