import Image from "next/image";
import newsIcon from "/public/assets/file-text.png"
const Intro = () => {
  return (
    <div>
      <div className="px-[40px] py-[50px] md:px-[80px] lg:px-[120px] xl:px-[190px] xl:py[100px]">
        <h1
          className="text-black font-bold text-[32px] leading-[48px] md:text-[48px] md:leading-[72px] lg:text-[72px] lg:leading-[80px]
      2xl:text-[96px] 2xl:leading-[96px] mb-[10px] md:mb-[35px] lg:mb-[45px] 2xl:mb-[56px]"
        >
          News
        </h1>
        <p className="text-[#666666] text-[18px] leading-[22px] lg:text-[21px] lg:leading-[26px] font-semibold">
          <Image src={newsIcon} className="mr-2 inline"></Image>
          <span className="text-[#293891]">9</span>  of 48 articles
        </p>
      </div>
    </div>
  );
};

export default Intro;
