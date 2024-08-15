import { ILocation } from '@/interfaces/coordinates';
import Constants from 'expo-constants';

export const MAP_API_KEY = Constants.expoConfig?.extra?.MAP_API_KEY;

export const DEFAULT_LOCATION: ILocation = {
  lat: -1,
  lng: -1,
};