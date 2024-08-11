import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import TestComponent from '@/components/TestComponent';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <TestComponent />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 2,
    marginTop: 8,
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
});
