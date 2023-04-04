import "@/styles/globals.css";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import LoadingScreen from "@/components/Shared/LoadingScreen";
import { Router } from "next/router";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  Router.events.on("routeChangeStart",(url)=>{
    console.log("Router is changing");
    setIsLoading(true);
  })
  Router.events.on("routeChangeComplete",(url)=>{
    console.log("Router is changing");
    setIsLoading(false);
  })

  return (
    <>
      { isLoading?(
        <LoadingScreen></LoadingScreen>
      ):(
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp;