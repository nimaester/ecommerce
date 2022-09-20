import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider, createClient } from "urql";
import { StoreProvider } from "../lib/storeContext";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const colors = {
  brand: {
    900: "#525F6E",
    800: "#F2F2F2",
    700: "#7395ae",
    500: "#557a95",
    400: "#b1a296",
    300: "#FF5733",
    200: "#E1E3E4",
    100: "#F1F5F8",
  },
  button: {
    primary: "#332cf2",
  },
};

const theme = extendTheme({ colors });

const client = createClient({ url: process.env.NEXT_PUBLIC_INVENTORIES_API });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider theme={theme}>
        <StoreProvider>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </StoreProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
