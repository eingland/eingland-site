import { AppProps } from "next/app";
import ReactGA from "react-ga4";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from '@chakra-ui/react'
import theme from "../components/theme";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps, router }: AppProps) {
  ReactGA.initialize(`${"G-WPWCLRJ6B0"}`);
  ReactGA.send("pageview");
  return (
    <ChakraProvider theme={theme}>      
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default App;
