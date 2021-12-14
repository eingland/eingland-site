import { AppProps } from 'next/app'
import "prismjs/themes/prism-coy.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
