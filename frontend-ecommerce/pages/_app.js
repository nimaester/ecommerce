import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider, createClient } from "urql";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    500: "#ff0000",
  },
};

const theme = extendTheme({ colors });

const client = createClient({ url: process.env.NEXT_PUBLIC_INVENTORIES_API });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
