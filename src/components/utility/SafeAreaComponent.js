import { SafeAreaView, Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

// ${StatusBar.currentHeight && `margin-top: ${StatusBar.CurrentHeight}px`};

// ${Platform.OS === "android" && `margin-top:${StatusBar.currentHeight}px`}
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "android" && `margin-top:${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
