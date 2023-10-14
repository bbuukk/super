import "@/styles/globals.scss";
import Head from "next/head";
import Navbar from "@/comps/mutual/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeroContextProvider } from "../back/context/heroContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Super</title>
      </Head>
      <HeroContextProvider>
        <div className="container">
          <Navbar />
          <Component {...pageProps} />;
        </div>
      </HeroContextProvider>
    </>
  );
}
