
import AboutIntro from "./AboutIntro";
import Testimonial from "@/components/Home/Testimonial";
import TrustPilot from "@/components/Home/TrustPilot";
import UseKarma from "@/components/Home/UseKarma";
import News from "@/components/Home/News";
import FindCar from "./FindCar";
import Script from "next/script";
const About = () => {
  return (
    <div>
      
      <AboutIntro></AboutIntro>
      <FindCar></FindCar>
      <Testimonial></Testimonial>
      <TrustPilot></TrustPilot>
      <UseKarma></UseKarma>
      <News></News>
    </div>
  );
};

export default About;
