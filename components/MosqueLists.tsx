import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import MosqueCard from './MosqueCard';

const MAP_API_KEY = Constants.expoConfig?.extra?.MAP_API_KEY;

interface IMosque {
  name: string;
  location: {
    lat: number,
    lang: number,
  };
  icon: string;
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
          return {
            name: result.name,
            location: result.geometry?.location,
            icon: result.icon,
            plusCode: result.plus_code
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
    <View>
      <MosqueCard />
      <Text>{JSON.stringify(mosqueList)}</Text>
    </View>
  );
}

export default MosqueLists;