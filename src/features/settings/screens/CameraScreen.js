import React, { useRef, useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";

const ProfileCamera = styled(Camera)`
  /*width: 100%;*/
  /*height: 100%;*/
  flex: 1;
`;

const MyButton = styled(TouchableOpacity)`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #f1f1f1;
`;

export const CameraScreen = ({ navigaton }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [image, setImage] = useState(null);

  const cameraRef = useRef();

  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        setImage(photo.uri);
        navigaton.goBack();
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No Access To Camera</Text>;
  }

  return (
    <>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
        ratio={"16:9"}
      />
      <MyButton onPress={snap}>
        <Text>Take Picture</Text>
      </MyButton>
    </>
  );
};
