import Image from "next/image";
import heroImg from "/public/assets/partner_hero.png";
import trustPilotImg from "/public/assets/trustpilot1.png";
import styles from "../../AboutUs/hero.module.css";
const LondonOfficeHero = () => {
  const bgBannerBig = {
    backgroundImage: `url(${heroImg.src})`,
    width: "100vw",
    // minHeight: "70vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className={`px-[40px] md:px-[80px] lg-px-[120px] xl-[150px] 2xl:px-[190px] ${styles.bg}`}
      
    >
      <h1
        className="text-white font-bold  text-[64px] leading-[64px] lg:text-[80px] lg:leading-[80px]
        2xl:text-[120px] 2xl:leading-[110px] pt-[120px]"
      >
        London office
      </h1>
      <span className="bg-secondary h-[10px] w-[100px] block mt-3"></span>
        <Image src={trustPilotImg} className="mt-[25px] h-full"></Image>
      <button className="px-[36px] py-[18px] font-bold text-primary text-[21px] leading-[28px] bg-secondary rounded-md max-lg:w-full mt-[48px]">
      Get help today
      </button>
      <div className="mt-[150px] pb-[50px]">
        <span
          className="text-white text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-[20px]"
        >
          Home
        </span>
        <span
          className="text-white text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-[20px]"
        >
          .
        </span>
        <span
          className="text-secondary text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-5"
        >
          London office
        </span>
      </div>
    </div>
  );
};

export default LondonOfficeHero;
