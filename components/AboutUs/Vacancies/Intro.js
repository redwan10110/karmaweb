import Image from "next/image";

import newsIcon from "/public/assets/file-text.png";

const Intro = () => {
  return (
    <div>
      <div className="px-[40px] py-[50px] pb md:px-[80px] lg:px-[120px] xl:px-[190px] xl:py[90px]">
        <h1
          className="text-black font-bold text-[32px] leading-[38px] xl:text-[56px] xl:leading-[72px] mb-[15px] xl:mb-[30px]"
        >
          View our current vaccancies
        </h1>
        <p className="text-[#666666] text-[18px] leading-[22px] lg:text-[21px] lg:leading-[26px] font-semibold">
          <Image src={newsIcon} className="mr-2 inline"></Image>
          <span className="text-[#293891]">5</span> of 6 articles
        </p>
      </div>
    </div>
  );
};

export default Intro;
