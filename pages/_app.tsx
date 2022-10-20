import "../styles/globals.css";
import "reactflow/dist/style.css";

import type {AppProps} from "next/app";

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
