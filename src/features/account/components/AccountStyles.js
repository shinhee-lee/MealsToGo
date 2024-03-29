import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

import { Text } from "../../../components/typography/TextComponent";
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  position: relative;
  top: -15%;
  border-radius: 10px;
`;

export const AccountContainer2 = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  position: relative;
  top: -15%;
`;

export const Title2 = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[3]};
  maring-bottom: ${(props) => props.theme.space[2]};
`;

// export const AnimationWrapper = styled.View`
//   width: 100%;
//   height: 40%;
//   align-items: center;
//   position: absolute;
//   top: ${(props) => props.theme.space[5]};
//   padding: ${(props) => props.theme.space[2]};
//   bottom: ${(props) => props.theme.space[5]};
// `;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  position: relative;
  top: -10%;
`;
