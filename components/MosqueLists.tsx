import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import MosqueCard from './MosqueCard';
import { commonStyles } from '@/stylesheets/common';

const MAP_API_KEY = Constants.expoConfig?.extra?.MAP_API_KEY;

interface IMosque {
  name: string;
  id: string;
  location: {
    lat: number,
    lang: number,
  };
  icon: string;
  photo: string;
  plusCode: {
    compoundCode: string,
    globalCode: string,
  };
}

const MosqueLists = () => {
  const [mosqueList, setMosqueList] = useState<IMosque[]>([]);

  useEffect(() => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.867052,151.206108&radius=5000&keyword=mosque&key=${MAP_API_KEY}`;
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
  }, [])
  
  return (
    <View style={commonStyles.flexWrap}>
      {mosqueList.map(mosque => {
        return (
          <MosqueCard 
            key={mosque.name} 
            name={mosque.name} 
            distance={mosque.plusCode.globalCode} 
            icon={mosque.icon}
            photo={mosque.photo} 
          />
        )}
      )}
    </View>
  );
}

export default MosqueLists;