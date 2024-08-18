import React, {useState, useEffect} from 'react';
import { ThemedView } from '@/components/ThemedView';
import { commonStyles } from '@/stylesheets/common';
import Welcome from '@/components/Welcome';
import Home from '@/components/Home';

export default function HomeScreen() {
  const [showHome, setShowHome] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowHome(false);
    }, 4000)
  }, []);

  return (
    <ThemedView style={commonStyles.container}>
      {showHome ? <Welcome /> : <Home />}
    </ThemedView>
  );
}
