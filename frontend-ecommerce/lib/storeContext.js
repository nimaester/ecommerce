import React, { useState, useContext, createContext } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState("");
  const [cartSlider, setCartSlider] = useState(false);
  const [miniNavbar, setMiniNavbar] = useState(false);
  const [user, setUser] = useState("");

  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        sort,
        setSort,
        cartSlider,
        setCartSlider,
        miniNavbar,
        setMiniNavbar,
        user,
        setUser,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(StoreContext);
};

export { StoreContext, StoreProvider };
