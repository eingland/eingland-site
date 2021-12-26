import { AppProps } from "next/app";
import "prismjs/themes/prism-coy.css";
import ReactGA from "react-ga4";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from '@chakra-ui/react'
import theme from "../components/theme";

function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize(`${"G-WPWCLRJ6B0"}`);
  ReactGA.send("pageview");
  return (
    <ChakraProvider theme={theme}>      
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
