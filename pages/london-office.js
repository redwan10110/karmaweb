import GetHelpSection from "@/components/Contact/LondonOffice/GetHelpSection";
import IntroSection from "@/components/Contact/LondonOffice/IntroSection";
import LondonOfficeHero from "@/components/Contact/LondonOffice/LondonOfficeHero";
import Map from "@/components/Contact/LondonOffice/Map";
import Footer from "@/components/Shared/Footer";
import Navigation from "@/components/Shared/Navigation";
import Head from "next/head";
import React from "react";

const londonOffice = () => {
  return (
    <>
      <Head>
        <title>London Office | Karma Claims</title>
        <meta name="description" content="Karma Claims London Office Information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <LondonOfficeHero></LondonOfficeHero>
      <IntroSection></IntroSection>
      <Map></Map>
      <GetHelpSection></GetHelpSection>
      <Footer></Footer>
    </>
  );
};

export default londonOffice;
