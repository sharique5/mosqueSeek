import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, Text, Image } from 'react-native';
import * as Location from 'expo-location';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MosqueCard from './MosqueCard';
import { commonStyles } from '@/stylesheets/common';
import { IMosque } from '@/interfaces/mosqueLists';
import { DEFAULT_LOCATION, HOW_TO_ENABLE_LOCATION_PERMISSION, MAP_API_KEY } from '@/constants/Common';
import { ILocation } from '@/interfaces/coordinates';
import { getMosqueList } from '@/utility/dataService';
import { Colors } from '@/constants/Colors';
import { mosqueListStyles } from '@/stylesheets/mosqueList';

const MosqueLists = () => {
  const [mosqueList, setMosqueList] = useState<IMosque[]>([]);
  const [currentLocation, setCurrentLocation] = useState<ILocation>(DEFAULT_LOCATION);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getLocation = async () => {
    // Request permission to access location
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log("Permission to access location was denied");
      setCurrentLocation(DEFAULT_LOCATION);
      return;
    }

    // Get current location
    let currentLocation:any = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
    setCurrentLocation({
      lat: currentLocation?.coords?.latitude,
      lng: currentLocation?.coords?.longitude,
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (currentLocation.lat === DEFAULT_LOCATION.lat) {
      return;
    }
    setIsLoading(true);
    getMosqueList(currentLocation)
      .then((response: IMosque[]) => {
        setMosqueList(response);
      })
      .catch(() => setMosqueList([]))
      .finally(() => setIsLoading(false));
  }, [currentLocation?.lat])
  
  return currentLocation.lat === DEFAULT_LOCATION.lat ? 
      <View style={[commonStyles.container, commonStyles.flexCenter, mosqueListStyles.container]}>
        <FontAwesome name="chain-broken" size={48} color={Colors.light.icon} />
        {HOW_TO_ENABLE_LOCATION_PERMISSION.map((step, index) => (
          <View key={index} style={mosqueListStyles.item}>
            <Text style={mosqueListStyles.number}>{index + 1}.</Text>
            <Text style={mosqueListStyles.text}>{step}</Text>
          </View>
        ))}
      </View> :
    isLoading ? (
      <View style={commonStyles.flexWrap}>
        <ActivityIndicator size="large" color={Colors.light.icon} />
      </View>
    ) : (
      <View style={commonStyles.flexWrap}>
        {mosqueList.map(mosque => {
          return (
            <MosqueCard {...{...mosque, currentLocation}} key={mosque.id} />
          )}
        )}
      </View>
    );
}

export default MosqueLists;