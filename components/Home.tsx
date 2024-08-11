import React, {useRef, useEffect} from 'react';
import { View, Animated } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { commonStyles } from '@/stylesheets/common';
import { homeStyles } from "@/stylesheets/home";

const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const circularAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  var range = 1, snapshot = 50, radius = 100;
  /// translateX
  var inputRange = [], outputRange = [];
  for (var i=0; i<=snapshot; ++i) {
      var value = i/snapshot;
      var move = Math.sin(value * Math.PI * 2) * radius /2;
      inputRange.push(value);
      outputRange.push(move);
  }
  const translateX = circularAnim.interpolate({ inputRange, outputRange });

  /// translateY
  var inputRange = [], outputRange = [];
  for (var i=0; i<=snapshot; ++i) {
      var value = i/snapshot;
      var move = -Math.cos(value * Math.PI * 2) * radius /2;
      inputRange.push(value);
      outputRange.push(move);
  }
  const translateY = circularAnim.interpolate({ inputRange, outputRange });
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const animate = () => {    
    circularAnim.setValue(0)
    Animated.timing(circularAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    animate();
  }, []);

  const transform = [{ translateY }, { translateX }];
  return (
    <ThemedView style={[commonStyles.container, commonStyles.flexCenter]}>
      <View style={[commonStyles.flexCenter, homeStyles.homeIcons]}>
        <Animated.View // Special animatable View
          style={{
            // ...props.style,
            opacity: fadeAnim, // Bind opacity to animated value
          }}>
          <MaterialIcons name="mosque" size={96} color="black" />
        </Animated.View>
        <Animated.View style={[{ transform }]}>
          <FontAwesome5 name="search-location" size={48} color="yellow" />
        </Animated.View>
      </View>
      <ThemedText lightColor='#464646'>MosqueSeek</ThemedText>
    </ThemedView>
  )
}

export default Home;