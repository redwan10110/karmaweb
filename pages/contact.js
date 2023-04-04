import Hero from "@/components/AboutUs/Partners/Hero";
import Form from "@/components/Contact/Form";
import Footer from "@/components/Shared/Footer";
import Navigation from "@/components/Shared/Navigation";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Karma Claims</title>
        <meta name="description" content="Contact Karma Claims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Hero heading={"Get in touch today"}></Hero>
      <Form></Form>
      <Footer></Footer>
    </>
  );
};

export default contact;
