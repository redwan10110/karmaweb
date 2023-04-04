import FaqSection from "./FaqSection";
import Footer from "../Shared/Footer";
import Hero from "./Hero";
import HomeSpecialization from "./HomeSpecialization";
import Navigation from "../Shared/Navigation";

import Testimonial from "./Testimonial";
import TrustPilot from "./TrustPilot";
import UseKarma from "./UseKarma";
import Vehicle from "./Vehicle";
import News from "./News";
import MegaMenu from "../Shared/MegaMenu";
import Head from "next/head";

const Home = () => {
  return (
    <>
     
      <Navigation></Navigation>
      <Hero></Hero>
      <HomeSpecialization></HomeSpecialization>
      <TrustPilot></TrustPilot>
      <UseKarma></UseKarma>
      <FaqSection></FaqSection>
      <News title="Karma news and cases"></News>
      <Testimonial></Testimonial>
      <Vehicle></Vehicle>
      <Footer></Footer>

    </>
  );
};

export default Home;
