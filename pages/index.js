import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Home1 from "../components/Home/Home"
import Script from "next/script";





const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Karma Website</title>
        <meta name="description" content="What goes around comes around" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="/node_modules/tw-elements/dist/js/index.min.js" async></Script>
        
      </Head>
      <main>
        <Home1></Home1>
      </main>
    </>
  );
}
