import heroImg from "/public/assets/partner_hero.png";
import styles from '../hero.module.css';
const Hero = ({heading}) => {
  // const bgBannerBig = {
  //   backgroundImage: `url(${heroImg.src})`,
  //   width: "100vw",
  //   // minHeight: "70vh",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  // };
  return (
    <div
      className={`px-[40px] md:px-[80px] lg-px-[120px] xl-[150px] 2xl:px-[190px] ${styles.bg}`}
      
    >
      <h1
        className="text-white font-bold  text-[64px] leading-[64px] lg:text-[80px] lg:leading-[80px]
        2xl:text-[120px] 2xl:leading-[110px] pt-[180px]"
      >
        {heading}
      </h1>
      <span className="bg-secondary h-[10px] w-[100px] block mt-3"></span>
      <div className="mt-[150px] pb-[50px]">
        <span
          className="text-white text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-[20px]"
        >
          Home  
        </span>
        <span className="text-white text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-[20px]">.</span>
        <span
          className="text-secondary text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-5"
        >
           {heading}
        </span>
      </div>
    </div>
  );
};

export default Hero;
