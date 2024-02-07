import React from "react";
import LottieView from "lottie-react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/AccountStyles";

import { Spacer } from "../../../components/spacer/SpacerComponent";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />

      <AnimationWrapper>
        <LottieView
          key="animation"
          style={{
            width: "80%",
            height: "80%",
          }}
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/pizza-phone.json")}
        />
      </AnimationWrapper>

      <Title>Meals To Go</Title>

      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>

        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
