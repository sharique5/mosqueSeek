import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee',
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    color: '#fff',
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