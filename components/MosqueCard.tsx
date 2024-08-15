import React, {useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { commonStyles } from '@/stylesheets/common';
import { mosqueCardStyles } from '@/stylesheets/mosqueCard';
import { IMosqueCard } from '@/interfaces/mosqueLists';
import { MAP_API_KEY } from '@/constants/Common';

const MosqueCard = (props: IMosqueCard) => {
  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  useEffect(() => {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${props.currentLocation.lat},${props.currentLocation.lng}&destinations=${props.location.lat},${props.location.lng}&key=${MAP_API_KEY}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then((response: any) => {
        setDistance(response?.rows?.[0]?.elements?.[0]?.distance?.text);
        setDuration(response?.rows?.[0]?.elements?.[0]?.duration?.text);
      })
      .catch((err) => {
        console.log("#123 err = ", err);
      })
  }, [])

  return (
    <View style={[commonStyles.flexCenter, mosqueCardStyles.container]}>
      <View style={mosqueCardStyles.image}>
        <Image
          style={mosqueCardStyles.imageStyle}
          source={{
            uri: props?.photo ?? props?.icon ?? 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={mosqueCardStyles.details}>
        <Text style={mosqueCardStyles.name} numberOfLines={1} ellipsizeMode="tail">{props?.name}</Text>
        <Text style={mosqueCardStyles.distance}>{distance}, {duration}</Text>
      </View>
      <View style={[mosqueCardStyles.navigate, commonStyles.flexCenter]}>
        <Ionicons name="navigate-circle-outline" size={48} color="blue" />
      </View>
    </View>
  );
}

export default MosqueCard;