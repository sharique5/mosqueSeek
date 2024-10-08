import React, {useState, useEffect} from 'react';
import { View, Image, Text, Platform, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import Ionicons from '@expo/vector-icons/Ionicons';
import { commonStyles } from '@/stylesheets/common';
import { mosqueCardStyles } from '@/stylesheets/mosqueCard';
import { IMosqueCard } from '@/interfaces/mosqueLists';
import { ENDPOINTS } from '@/constants/Common';
import { getDistanceBetweenCoordinates } from '@/utility/dataService';
import { formatString } from '@/utility/strings';
import { Colors } from '@/constants/Colors';

const MosqueCard = (props: IMosqueCard) => {
  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  useEffect(() => {
    getDistanceBetweenCoordinates(props.currentLocation, props.location)
      .then(res => {
        setDistance(res.distance);
        setDuration(res.duration);
      })
  }, [])

  const openMaps = () => {
    const { lat, lng } = props.location;
    const url = Platform.select({
      ios: `maps:0,0?q=${lat},${lng}`, // Apple Maps
      android: `geo:0,0?q=${lat},${lng}`, // Google Maps
      default: formatString(ENDPOINTS.navigationQuery, { latitude: lat.toString(), longitude: lng.toString() }), // Web fallback
    });
    
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Unable to open maps');
    });
  };

  return (
    <View style={[commonStyles.flexCenter, mosqueCardStyles.container]}>
      <View style={mosqueCardStyles.image}>
        <Image
          style={mosqueCardStyles.imageStyle}
          source={{
            uri: props?.photo ?? props?.icon ?? ENDPOINTS.default,
          }}
        />
      </View>
      <View style={mosqueCardStyles.details}>
        <View style={mosqueCardStyles.nameContainer}>
          <Text style={mosqueCardStyles.name} numberOfLines={1} ellipsizeMode="tail">{props?.name}</Text>
          <Text style={mosqueCardStyles.distance}>{distance}, {duration}</Text>
        </View>
        <View style={[mosqueCardStyles.navigate, commonStyles.flexCenter]}>
          <Ionicons name="navigate-circle-outline" size={48} color={Colors.light.icon} onPress={openMaps} />
        </View>
      </View>
    </View>
  );
}

export default MosqueCard;