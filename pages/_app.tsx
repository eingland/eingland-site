import { AppProps } from "next/app";
import "prismjs/themes/prism-coy.css";
import ReactGA from "react-ga4";

import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize(`${"G-WPWCLRJ6B0"}`);
  ReactGA.send("pageview");
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
