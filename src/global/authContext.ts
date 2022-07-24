import React, { useEffect, useState } from "react";

const AuthContext = React.createContext(null);

const StateContextProvider = ({ children }: any) => {
  const [initializing, setInitializing] = useState(true);

  const value = {
    initializing,
    setInitializing,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, StateContextProvider };
