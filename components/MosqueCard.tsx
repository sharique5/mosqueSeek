import React, {useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { commonStyles } from '@/stylesheets/common';
import { mosqueCardStyles } from '@/stylesheets/mosqueCard';
import { IMosqueCard } from '@/interfaces/mosqueLists';
import { ENDPOINTS } from '@/constants/Common';
import { getDistanceBetweenCoordinates } from '@/utility/dataService';

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
          <Ionicons name="navigate-circle-outline" size={48} color="blue" />
        </View>
      </View>
    </View>
  );
}

export default MosqueCard;