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
    flexWrap: 'wrap',
    backgroundColor: Colors.light.icon,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 80,
    position: 'absolute', // Make the footer sticky
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5,
    color: Colors.light.background,
  },
  footerImage: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
    resizeMode: 'contain',
  }
});