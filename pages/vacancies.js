import Hero from "@/components/AboutUs/Partners/Hero"
import FindOut from "@/components/AboutUs/Vacancies/FindOut"
import Intro from "@/components/AboutUs/Vacancies/Intro"
import VacanciesCards from "@/components/AboutUs/Vacancies/VacanciesCards"
import Navigation from "@/components/Shared/Navigation"
import NewsSlider from "@/components/AboutUs/Careers/NewsSlider"
import Head from "next/head"
import Footer from "@/components/Shared/Footer"


const vacancies = () => {
  return (
    <>
    <Head>
        <title>Vacancies | Karma Claims</title>
        <meta name="description" content="Current vacancies available at Karma Claims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navigation></Navigation>
        <Hero heading="Current vacancies"></Hero>
        <Intro></Intro>
        <VacanciesCards></VacanciesCards>
        <FindOut></FindOut>
        <NewsSlider></NewsSlider>
        <Footer></Footer>
    </>
  )
}

export default vacancies