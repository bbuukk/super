import "@/styles/globals.scss";
import Head from "next/head";
import Navbar from "@/comps/mutual/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HeroContextProvider } from "../back/context/heroContext";
import { useHeroContext } from "../back/hooks/useHeroContext";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Super</title>
      </Head>
      <HeroContextProvider>
        <div className="container">
          <div className="mb-5">
            <Navbar />
          </div>
          <ContextComponent>
            <Component {...pageProps} />
          </ContextComponent>
        </div>
      </HeroContextProvider>
    </>
  );
}

function ContextComponent({ children }) {
  const { dispatch } = useHeroContext();

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch("http://localhost:4000/heroes");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_HEROES", payload: data });
      }
    };
    fetchHeroes();
  }, []);
  1;
  return children;
}
