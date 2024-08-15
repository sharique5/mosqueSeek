export interface IMosque {
  name: string;
  id: string;
  location: {
    lat: number,
    lng: number,
  };
  icon: string;
  photo: string;
  plusCode: {
    compoundCode: string,
    globalCode: string,
  };
}

export interface IMosqueCard extends IMosque {
  currentLocation: {
    lat: number,
    lng: number,
  };
}