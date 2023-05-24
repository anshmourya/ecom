import React, { createContext, useState } from "react";

export const NavForContext = createContext();

export const NavForProvider = ({ children }) => {
  const [Nav1, setNav1] = useState();
  const [Nav2, setNav2] = useState();
  return (
    <NavForContext.Provider value={{ Nav1, Nav2, setNav1, setNav2 }}>
      {children}
    </NavForContext.Provider>
  );
};
