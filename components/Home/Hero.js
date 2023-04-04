import Image from "next/image";
import bigLogo from "/public/assets/Karma big logo.png";
import mobileHeroText from "/public/assets/mobileKarmaLogo.png";
import banner from "/public/assets/HomeBG.png";
import styles from "./Hero.module.css";
const Hero = () => {
  
  return (
    <>
      <div className={`px-[40px] pt-[120px] pb-[175px] lg:px-[190px] lg:pt-[209px] lg:pb-[290px] ${styles.heroBg}`} >
        <div className="">
          <span className="text-[64px] leading-[128px] lg:text-[120px] text-secondary font-bold hidden lg:block">We are</span>
          <span className="text-[64px] leading-[128px] lg:text-[120px] text-secondary font-bold block lg:hidden">we are</span>
          <Image
            alt="banner"
            src={mobileHeroText}
            width={354}
            height={254}
            className="max-lg:mb-[70px] lg:my-[48px] block md:hidden"
          ></Image>
          <Image
            alt="banner"
            src={bigLogo}
            width={1441}
            height={240}
            className="max-lg:mb-[70px] lg:my-[48px] hidden md:block"
          ></Image>
          <p
            className="lg:text-[24px] lg:leading-[29px] text-secondary text-[18px] leading-[23px]
        font-semibold xl:w-6/12"
          >
            A unique law firm working for people in the United Kingdom, and
            across the globe, who have been injured, discriminated against or
            had their human rights abused.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
