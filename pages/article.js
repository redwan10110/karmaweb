import ArticleImage from "@/components/AboutUs/Article/ArticleImage";
import ArticleTestimonial from "@/components/AboutUs/Article/ArticleTestimonial";
import Intro from "@/components/AboutUs/Article/Intro";
import Paragraph from "@/components/AboutUs/Article/Paragraph";
import Testimonial2 from "@/components/AboutUs/Article/Testimonial2";
import TextSection from "@/components/AboutUs/Article/TextSection";
import NewsSlider from "@/components/AboutUs/Careers/NewsSlider";
import Video from "@/components/AboutUs/Video";
import Footer from "@/components/Shared/Footer";
import Navigation from "@/components/Shared/Navigation";
import Head from "next/head";
import React from "react";

const article = () => {
  return (
    <>
      <Head>
        <title>Example Article | Karma Claims</title>
        <meta name="description" content="Example Article at Karma Claims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Intro></Intro>
      <div className="max-lg:hidden">
        <NewsSlider></NewsSlider>
      </div>
      <TextSection
        boldText="Karma is widely regarded as one of the leading law firms specialising in claimant environmental work in the UK and around the world.
      "
        semiBoltText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        normalText="
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      "
      ></TextSection>
      <Video className=""></Video>
      <TextSection
        boldText="What is environmental law?"
        semiBoltText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        normalText="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      ></TextSection>
      <ArticleImage></ArticleImage>
      <TextSection
        boldText="Who can environment law affect?"
        semiBoltText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        normalText="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      ></TextSection>

      <TextSection
        boldText="How Karma can help with environment and planning law"
        semiBoltText="
      The Environment Act passed into UK law in 2021. It provides the UK government with greater powers to legally set targets for:"
        normalText="Greater regulation, the introduction and updating of environmental laws and an increased focus on climate issues by governments around the world are expanding the importance of environmental and planning law."
      ></TextSection>
      <Paragraph normalText="The Environment Act aims to stop the decline in species by 2030, ensure new developments improve or create habitats for nature, and tackle deforestation abroad. For businesses, this may introduce new incentives and regulations around practices, such as recycling, sustainability and pollution."></Paragraph>
      <Paragraph normalText="The independent Office for Environmental Protection (OEP) will enforce the new environmental targets and hold government and public bodies to account."></Paragraph>
      <ArticleTestimonial></ArticleTestimonial>
      <TextSection
        boldText="Who can environment law affect?"
        normalText={
          "As environmental law spans a wide area, it can affect a range of individuals, businesses, groups and government bodies – either to bring a claim or defend allegations."
        }
      ></TextSection>

      <TextSection
        boldText="How Karma can help with environment and planning law"
        normalText="If you want to use the law to help protect the environment and slow down the impact of climate change, our specialist lawyers can help. We routinely take on strategic and innovative challenges to proposals that threaten to damage and destroy the environment.
      "
      ></TextSection>
      <Paragraph
        normalText="From working with campaigners wanting to legally challenge fossil fuel extraction, to helping charities and community groups protect wildlife under threat, at Karma we can assist across all aspects of environment and planning law.

"
      ></Paragraph>
      <Paragraph normalText="To find out if you may have a claim and how our specialist team might be able to help, contact our environment team. Speak to one of our solicitors or arrange a call back. They will listen to your case, assess whether you have grounds for a claim and advise on the next steps to take."></Paragraph>
      <Testimonial2></Testimonial2>
      <Paragraph normalText="We are passionate about access to environmental justice for all and are experts in the bespoke costs’ regime for environmental cases. With more than 35 years’ experience working in both the UK and internationally on a range of environmental cases, we have the skills, knowledge and reputation to assist with many claims."></Paragraph>
      <Footer></Footer>
    </>
  );
};

export default article;
