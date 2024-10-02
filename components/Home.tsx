import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView, View, Text, Image } from 'react-native';
import MosqueLists from './MosqueLists';
import { homeStyles } from '@/stylesheets/home';
import { Colors } from '@/constants/Colors';
import { commonStyles } from '@/stylesheets/common';

const Home = () => {
  return (
    <View
      style={homeStyles.contentContainer}
    >
      <View style={homeStyles.headerContainer}>
        <View style={homeStyles.header}>
          <MaterialIcons name="mosque" size={48} color={Colors.light.background} />
          <Text style={homeStyles.headerText}>MosqueSeek</Text>
        </View>
      </View>
      <ScrollView 
        contentContainerStyle={homeStyles.itemContainer} 
        horizontal={false} 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true} 
      >
        <MosqueLists />
      </ScrollView>
      <View style={commonStyles.footer2}>
        <Text style={commonStyles.footerText}>
          Powered by 
        </Text>
        <Image 
          style={commonStyles.footerImage} 
          source={require('../assets/images/splash.png')} 
        />
        <Text style={commonStyles.footerText}>
          {' '} Connecting You to Nearby Mosques
        </Text>
      </View>
    </View>
  );
}

export default Home;