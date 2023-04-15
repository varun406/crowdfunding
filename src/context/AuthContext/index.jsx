import React, { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setLoginOpen } = useContext(DataContext);

  const [user, setUser] = useState(() =>
    localStorage.getItem("authToken") ? localStorage.getItem("authToken") : null
  );

  useEffect(() => {
    console.log(user);
    if (!user || user === undefined) {
      setLoginOpen(true);
    }
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
