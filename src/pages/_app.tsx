import type { AppProps } from "next/app";
// import Head from "next/head";
import React from "react";

import "../styles/globals.css";
import "../styles/hljs-github.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head></Head> */}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
