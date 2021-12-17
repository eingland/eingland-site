import { AppProps } from 'next/app'
import "prismjs/themes/prism-coy.css";
import ReactGA from 'react-ga4'

function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize(`${'297140822'}`);
  ReactGA.send("pageview");
  return <Component {...pageProps} />
}

export default App
