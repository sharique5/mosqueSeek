import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import MosqueCard from './MosqueCard';
import { commonStyles } from '@/stylesheets/common';
import { IMosque } from '@/interfaces/mosqueLists';
import { DEFAULT_LOCATION, MAP_API_KEY } from '@/constants/Common';
import { ILocation } from '@/interfaces/coordinates';

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
    console.log("#123 here currentLocation === ", currentLocation);
    if (currentLocation.lat === DEFAULT_LOCATION.lat) {
      return;
    }
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentLocation?.lat},${currentLocation?.lng}&radius=5000&keyword=mosque&key=${MAP_API_KEY}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then((response: any) => {
        const fetchedList = response?.results?.filter((result: any) => result.business_status === "OPERATIONAL").map((result: any) => {
          const photoreference = result?.photos?.[0]?.photo_reference ?? "";
          return {
            id: result.place_id,
            name: result.name,
            location: result.geometry?.location,
            icon: result.icon,
            plusCode: {
              compoundCode: result.plus_code?.compound_code,
              globalCode: result.plus_code?.global_code,
            },
            photo: photoreference ? `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoreference}&maxwidth=64&key=${MAP_API_KEY}` : null,
          }
        });
        setMosqueList(fetchedList);
      })
      .catch(err => {
        console.log("#123 error fetching mosques: ", err);
        setMosqueList([]);
      })
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