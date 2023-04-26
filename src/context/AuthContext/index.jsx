import React, { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setLoginOpen } = useContext(DataContext);

  const [user, setUser] = useState(() =>
    localStorage.getItem("authToken") ? localStorage.getItem("authToken") : null
  );

  const [userAddress, setUserAddress] = useState(() =>
    localStorage.getItem("userAddress")
      ? localStorage.getItem("userAddress")
      : null
  );

  useEffect(() => {
    console.log(user);
    if (!user || user === undefined) {
      setLoginOpen(true);
    }

    if (!userAddress || userAddress === undefined) {
      setLoginOpen(true);
    }
  }, [user, userAddress]);
  return (
    <AuthContext.Provider value={{ user, setUser, userAddress }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
