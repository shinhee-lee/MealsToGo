import camelize from "camelize";
import { locations } from "./LocationMock";

//검색어에 따른 값 반환
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  //why 0? 데이터 구조 참고
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
