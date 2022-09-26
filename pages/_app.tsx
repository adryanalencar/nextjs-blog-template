import type { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react'
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Freelance Template</title>
      </Head>
      <div className="px-5">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
