import Image from "next/image";
import carWithBg from "/public/assets/carWithBg.png";
import banner from "/public/assets/banner.png";
import styles from "./service.module.css";
const Hero = () => {
  const bgBannerBig = {
    backgroundImage: `url(${banner.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={`${styles.heroBg} `}>
      <div className="grid grid-row 2xl:grid-cols-2">
        <div
          className={`px-[40px] md:px-[80px] lg:px-[120px] xl:px-[190px] ${styles.info} xl:w-full`}
        >
          <h1
            className="mt-[20px] md:mt-[80px] 
          xl:mt-[120px] mb-[30px]
          md:mb-[20px] text-secondary text-[64px] leading-[72px]    font-bold 
          md:text-[80px] md:leading-[80px] lg:leading-[100px] xl:text-[100px] xl:leading-[128px] 2xl:text-[120px] 2xl:leading-[128px] "
          >
            Vehicle Emissions
          </h1>
          <p className="text-[18px] leading-[22px] text-white mb-[30px] lg:mb-[60px] md:text-[24px] md:leading-[30px]">
            Is your car doing more damage to the environment than you think?
            Uncover the truth about your car’s emissions. Don’t let them get
            away with it.
          </p>
          <button className="text-[21px] leading-[28px] font-bold px-[50px] py-[10px] lg:px-[36px] lg:py-[22px] text-primary mb-[100px] lg:mb-[200px] rounded bg-secondary max-md:w-full">
            Check eligibility now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
