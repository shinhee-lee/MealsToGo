import React, { useState, createContext } from "react";

import { getAuth } from "firebase/auth";
import { loginRequest } from "./AuthenticationService";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth();
  const onLogin = (auth, email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };
  return (
    <AuthenticationContext.Provider value={{ user, isLoading, error, onLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};