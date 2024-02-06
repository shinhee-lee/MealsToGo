import React, { useState, createContext } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { loginRequest } from "./AuthenticationService";

// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth();

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);

    if (password !== repeatedPassword) {
      setIsLoading(false);
      setError("Error: Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
