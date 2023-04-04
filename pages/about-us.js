import Hero from "@/components/AboutUs/Hero";
import Navigation from "@/components/Shared/Navigation";
import Intro from "@/components/AboutUs/Intro";
import Video from "@/components/AboutUs/Video";
import Text from "@/components/AboutUs/Text";
import Testimonial from "@/components/AboutUs/Testimonial";
import TopFirm from "@/components/AboutUs/TopFirm";
import TestimonialImg from "@/components/AboutUs/TestimonialImg";
import FindOut from "@/components/AboutUs/FindOut";
import Footer from "@/components/Shared/Footer";
import Head from "next/head";

const AboutUS = () => {
  return (
    <>
      <Head>
        <title>About Us | Karma Claims</title>
        <meta name="description" content="Learn more about Karma Claims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Hero heading="About Us"></Hero>
      <Intro></Intro>
      <Video></Video>
      <Text
        info=" It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like)."
      ></Text>
      <Testimonial></Testimonial>
      <TopFirm></TopFirm>
      <Text
        info="
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      "
      ></Text>

      <TestimonialImg></TestimonialImg>
      <Text
        className="bg-primary"
        info="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      ></Text>

      <Text info="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."></Text>
      <FindOut></FindOut>
      <Footer></Footer>
    </>
  );
};

export default AboutUS;
