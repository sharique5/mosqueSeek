import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import MosqueCard from './MosqueCard';
import { commonStyles } from '@/stylesheets/common';
import { IMosque } from '@/interfaces/mosqueLists';
import { DEFAULT_LOCATION, MAP_API_KEY } from '@/constants/Common';
import { ILocation } from '@/interfaces/coordinates';
import { getMosqueList } from '@/utility/dataService';

const MosqueLists = () => {
  const [mosqueList, setMosqueList] = useState<IMosque[]>([]);
  const [currentLocation, setCurrentLocation] = useState<ILocation>(DEFAULT_LOCATION);

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
    getMosqueList(currentLocation)
      .then((response: IMosque[]) => {
        setMosqueList(response);
      })
      .catch(() => setMosqueList([]));
  }, [currentLocation?.lat])
  
  return (
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