import { ILocation } from '@/interfaces/coordinates';
import Constants from 'expo-constants';

export const MAP_API_KEY = Constants.expoConfig?.extra?.MAP_API_KEY;

const PHOTO_MAX_WIDTH = 320;

export const DEFAULT_LOCATION: ILocation = {
  lat: -1,
  lng: -1,
};

export const ENDPOINTS = {
  mosqueList: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={lat},{lng}&rankby=distance&keyword=mosque&key=${MAP_API_KEY}`,
  photo: `https://maps.googleapis.com/maps/api/place/photo?photoreference={photoreference}&maxwidth=${PHOTO_MAX_WIDTH}&key=${MAP_API_KEY}`,
  distanceCalculator: `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins={originLat},{originLng}&destinations={destinationLat},{destinationLng}&key=${MAP_API_KEY}`,
  default: "https://reactnative.dev/img/tiny_logo.png",
  navigationQuery: "https://www.google.com/maps/search/?api=1&query={plusCode}",
}