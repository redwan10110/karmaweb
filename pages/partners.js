import Hero from "@/components/AboutUs/Partners/Hero";
import Intro from "@/components/AboutUs/Partners/Intro";
import Pagination from "@/components/AboutUs/Partners/Pagination";
import Partners from "@/components/AboutUs/Partners/Partners";
import Footer from "@/components/Shared/Footer";
import Navigation from "@/components/Shared/Navigation";
import Head from "next/head";

const partners = () => {
  return (
    <>
      <Head>
        <title>Partners | Karma Claims</title>
        <meta name="description" content="Learn more about Karma Claims Partners" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Hero heading="Partners"></Hero>
      <Intro></Intro>
      <Partners></Partners>
      <Pagination></Pagination>
      <Footer></Footer>
    </>
  );
};

export default partners;
