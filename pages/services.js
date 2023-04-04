import Footer from "@/components/Shared/Footer";
import Navigation from "@/components/Shared/Navigation";
import About from "@/components/Our-Services/About/About";
import Contact from "@/components/Our-Services/Contact/Contact";
import Faq from "@/components/Our-Services/Faq/Faq";

import Hero from "@/components/Our-Services/Hero";
import HowWorks from "@/components/Our-Services/HowWorks/HowWorks";
import News from "@/components/Our-Services/News/News";
import Link from "next/link";
import Head from "next/head";

const services = () => {
  return (
    <>
      <Head>
        <title>Services | Karma Claims</title>
        <meta name="description" content="Services offered at Karma Claims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Hero></Hero>
      {/* tab navigtion */}
      <div className="">
        <ul
          className="xl:px-[190px] pl-[20px] nav nav-tabs flex max-md:whitespace-nowrap max-md:overflow-x-auto flex-row md:flex-row  list-none border-b-0  mb-4 "
          id="tabs-tab"
          role="tablist"
        >
          <li className="nav-item " role="presentation">
            <Link
              href="#tabs-about"
              className="
                          nav-link
                          block
                          font-semibold
                          text-[18px]
                          leading-[22px]
                          lg:text-[21px]
                          lg:leading-[26px]
                          test-primary
                          uppercase
                          border-x-0 border-t-0 border-b-2 border-transparent
                          px-6
                          py-[30px]
                          my-2
                          hover:border-transparent hover:bg-gray-100
                          focus:border-transparent
                          active
                        "
              id="tabs-about-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-about"
              role="tab"
              aria-controls="tabs-about"
              aria-selected="true"
            >
              About
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              href="#tabs-works"
              className="
      nav-link
      block
      font-semibold
                          text-[18px]
                          leading-[22px]
                          lg:text-[21px]
                          lg:leading-[26px]
                          test-primary
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-[30px]
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-works-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-works"
              role="tab"
              aria-controls="tabs-works"
              aria-selected="false"
            >
              How It Works
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              href="#tabs-news"
              className="
      nav-link
      block
      font-semibold
                          text-[18px]
                          leading-[22px]
                          lg:text-[21px]
                          lg:leading-[26px]
                          test-primary
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-[30px]
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-news-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-news"
              role="tab"
              aria-controls="tabs-news"
              aria-selected="false"
            >
              News
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              href="#tabs-faqs"
              className="
      nav-link
      block
      font-semibold
                          text-[18px]
                          leading-[22px]
                          lg:text-[21px]
                          lg:leading-[26px]
                          test-primary
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-[30px]
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-faqs-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-faqs"
              role="tab"
              aria-controls="tabs-faqs"
              aria-selected="false"
            >
              FAQs
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              href="#tabs-contact"
              className="
      nav-link
      block
      font-semibold
                          text-[18px]
                          leading-[22px]
                          lg:text-[21px]
                          lg:leading-[26px]
                          test-primary
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-[30px]
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-contact"
              role="tab"
              aria-controls="tabs-contact"
              aria-selected="false"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContent">
          {/* tab 1*/}
          <div
            className="tab-pane fade show active"
            id="tabs-about"
            role="tabpanel"
            aria-labelledby="tabs-about-tab"
          >
            <About></About>
          </div>
          {/* tab 2 */}
          <div
            className="tab-pane fade"
            id="tabs-works"
            role="tabpanel"
            aria-labelledby="tabs-works-tab"
          >
            <HowWorks></HowWorks>
          </div>
          {/* tab 3 */}
          <div
            className="tab-pane fade"
            id="tabs-news"
            role="tabpanel"
            aria-labelledby="tabs-news-tab"
          >
            <News title="Related News"></News>
          </div>
          {/* tab 4 */}
          <div
            className="tab-pane fade"
            id="tabs-faqs"
            role="tabpanel"
            aria-labelledby="tabs-faqs-tab"
          >
            <Faq></Faq>
          </div>
          {/* tab 5 */}
          <div
            className="tab-pane fade"
            id="tabs-contact"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab"
          >
            <Contact></Contact>
          </div>
        </div>
      </div>
      <Footer></Footer>
      
    </>
  );
};

export default services;
