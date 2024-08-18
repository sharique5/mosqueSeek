import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView, View, Text } from 'react-native';
import MosqueLists from './MosqueLists';
import { homeStyles } from '@/stylesheets/home';
import { Colors } from '@/constants/Colors';

const Home = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      contentContainerStyle={homeStyles.contentContainer}
    >
      <View style={homeStyles.headerContainer}>
        <View style={homeStyles.header}>
          <MaterialIcons name="mosque" size={48} color={Colors.light.background} />
          <Text style={homeStyles.headerText}>MosqueSeek</Text>
        </View>
      </View>
      <View style={homeStyles.itemContainer}>
        <MosqueLists />
      </View>
    </ScrollView>
  );
}

export default Home;