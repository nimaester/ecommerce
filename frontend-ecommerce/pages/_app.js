import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider, createClient } from "urql";
import { StoreProvider } from "../lib/storeContext";
import Nav from "../components/Nav";

const colors = {
  brand: {
    900: "#5d5c61",
    800: "#938E94",
    700: "#7395ae",
    500: "#557a95",
    400: "#b1a296",
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
      <StoreProvider>
        <ChakraProvider theme={theme}>
          <Nav />
          <Component {...pageProps} />
        </ChakraProvider>
      </StoreProvider>
    </Provider>
  );
}

export default MyApp;
