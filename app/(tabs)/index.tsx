import React, {useState, useEffect} from 'react';
import { ThemedView } from '@/components/ThemedView';
import Home from '@/components/Home';
import { commonStyles } from '@/stylesheets/common';
import MosqueLists from '@/components/MosqueLists';

export default function HomeScreen() {
  const [showHome, setShowHome] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowHome(false);
    }, 3000)
  }, []);

  return (
    <ThemedView style={commonStyles.container}>
      {showHome ? <Home /> : <MosqueLists/>}
    </ThemedView>
  );
}
