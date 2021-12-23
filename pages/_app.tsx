import { AppProps } from "next/app";
import "prismjs/themes/prism-coy.css";
import ReactGA from "react-ga4";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(fab, faEnvelope);

function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize(`${"G-WPWCLRJ6B0"}`);
  ReactGA.send("pageview");
  return <Component {...pageProps} />;
}

export default App;
