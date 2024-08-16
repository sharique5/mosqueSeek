import { IDistanceCoordinates, ILocation } from "@/interfaces/coordinates";
import { formatString } from "./strings";
import { ENDPOINTS } from "@/constants/Common";
import { IMosque } from "@/interfaces/mosqueLists";

export const getMosqueList = (currentLocation: ILocation): Promise<IMosque[]> => {
  const url = formatString(ENDPOINTS.mosqueList, currentLocation as any);

  // Return the fetch promise
  return fetch(url)
    .then((response) => response.json())
    .then((response: any) => {
      const fetchedList = response?.results
        ?.filter((result: any) => result.business_status === "OPERATIONAL")
        .map((result: any) => {
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
            photo: photoreference
              ? formatString(ENDPOINTS.photo, { photoreference })
              : null,
          };
        });

      // Return the processed list
      return fetchedList;
    })
    .catch(() => {
      // Handle error and reject with an empty array
      return [];
    });
};

export const getDistanceBetweenCoordinates = (origin: ILocation, destination: ILocation): Promise<IDistanceCoordinates> => {
  const url = formatString(ENDPOINTS.distanceCalculator, {
    originLat: origin.lat.toString(),
    originLng: origin.lng.toString(),
    destinationLat: destination.lat.toString(),
    destinationLng: destination.lng.toString(),
  });
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then((response: any) => {
      return {
        distance: response?.rows?.[0]?.elements?.[0]?.distance?.text ?? "",
        duration: response?.rows?.[0]?.elements?.[0]?.duration?.text ?? ""
      } as IDistanceCoordinates
    })
    .catch((err) => {
      console.log("#123 err = ", err);
      return {
        distance: "",
        duration: "",
      } as IDistanceCoordinates
    })
}