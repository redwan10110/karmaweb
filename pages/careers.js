import CardSection from "@/components/AboutUs/Careers/CardSection";
import NewsSlider from "@/components/AboutUs/Careers/NewsSlider";
import Hero from "@/components/AboutUs/Partners/Hero";
import Footer from "@/components/Shared/Footer";
import Navigation from "@/components/Shared/Navigation";
import Head from "next/head";

const careers = () => {
  return (
    <>
      <Head>
        <title>Careers | Karma Claims</title>
        <meta name="description" content="Careers at karma Claims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Hero heading="Karma Careers"></Hero>
      <CardSection></CardSection>
      <NewsSlider></NewsSlider>
      <Footer></Footer>
    </>
  );
};

export default careers;
