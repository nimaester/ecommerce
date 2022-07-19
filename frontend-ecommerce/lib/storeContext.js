import React, { useState, useContext, createContext } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <StoreContext.Provider value={{ cart, setCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(StoreContext);
};

export { StoreContext, StoreProvider };
