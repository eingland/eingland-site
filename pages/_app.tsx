import { AppProps } from "next/app";
import "prismjs/themes/prism-coy.css";
import ReactGA from "react-ga4";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ChakraProvider } from "@chakra-ui/react";

library.add(fab, faEnvelope);

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
